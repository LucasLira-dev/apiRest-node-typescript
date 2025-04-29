import { RequestHandler } from "express"
import { object, ObjectSchema, string, ValidationError } from "yup"
import { console } from "inspector"
import { StatusCodes } from "http-status-codes"


type TProperty = 'body' | 'header' |'params' | 'query' // definindo os tipos de propriedades que podem ser validadas

type TAllSchemas = Record<TProperty, ObjectSchema<object>> // definindo um tipo que pode ser um objeto com as propriedades definidas acima e os valores como ObjectSchema<object>

type TGetSchema = <T extends object>(schema: ObjectSchema<object>) => ObjectSchema<T>; // definindo um tipo que pode ser uma função que recebe um ObjectSchema e retorna um ObjectSchema

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>; // definindo um tipo que pode ser uma função que retorna um objeto com as propriedades definidas acima e os valores como ObjectSchema<object>

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler

export const validation:TValidation = (getAllSchemas) => async (req, res, next) =>{
  console.log("Validando...")
  const schemas = getAllSchemas(schema => schema) // chamando a função que retorna os schemas de validação

  const errorsResult: Record<string, Record<string, string>> = {} // criando um objeto para armazenar os erros de validação

  Object.entries(schemas
  ).forEach(([key, schema])=>{
    try{
      schema.validateSync(req[key as TProperty], {abortEarly: false});
  }catch(err){
      const yupError= err as ValidationError;
      const errors: Record<string, string> = {} // criando um objeto para armazenar os erros de validação
  
      const validationErrors: Record<string, string> = {} // criando um objeto para armazenar os erros de validação
      
      yupError.inner.forEach((error) => {
        if (!error.path) return;
  
        validationErrors[error.path] = error.message;
      }) //pegando os erros de validação e colocando em um objeto
      
      errorsResult[key] = errors // adicionando os erros de validação ao objeto de erros







      // return next();
      
    //  return  res.status(StatusCodes.BAD_REQUEST).json({
    //     errors // retornando os erros de validação
    //   });
  }
  
  })

  if(Object.entries(errorsResult).length===0){
    return next(); // se não houver erros de validação, chama o próximo middleware
  } else{
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: errorsResult // retornando os erros de validação
    });
  }
  
} // criando um middleware para validação de dados
  
