import { Request, RequestHandler, Response } from "express"
import { StatusCodes } from "http-status-codes";

import * as yup from 'yup'

interface ICidade{
  nome: string;
}

const bodyValidation: yup.ObjectSchema<ICidade>= yup.object().shape({
  nome: yup.string().required().min(3)
});

export const createBodyValidator: RequestHandler = async(req, res, next) =>{
  try{
    await bodyValidation.validate(req.body, {abortEarly: false});
    return next(); // Se a validação passar, continue para o próximo middleware ou rota
}catch(err){
    const yupError= err as yup.ValidationError;


    const validationErrors: Record<string, string> = {} // criando um objeto para armazenar os erros de validação
    
    yupError.inner.forEach((error) => {
      if (!error.path) return;

      validationErrors[error.path] = error.message;
    }) //pegando os erros de validação e colocando em um objeto

    
    res.status(StatusCodes.BAD_REQUEST).json({
      errors: validationErrors, // retornando os erros de validação
    });
}

}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, ICidade>, res: Response)=>{

 

  console.log(req.body);

}
