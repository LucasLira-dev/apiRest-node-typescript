import { Request, Response } from "express"

import * as yup from 'yup'

interface ICidade{
  nome: string;
}

const bodyValidation: yup.ObjectSchema<ICidade>= yup.object().shape({
  nome: yup.string().required().min(3)
});


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, ICidade>, res: Response)=>{

  let validatedData: ICidade | undefined = undefined
  // Validar o body da requisição
  try{
      validatedData = await bodyValidation.validate(req.body)
  }catch(err){
      const yupError= err as yup.ValidationError;

      
      res.json({
        errors: {
          default: yupError.message,
        }
      });
  }
  

  console.log(validatedData);

}
