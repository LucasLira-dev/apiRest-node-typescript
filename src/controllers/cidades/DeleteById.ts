import * as yup from 'yup';


import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from 'express';

interface IParamsProps{
  id?: number;
 
}


export const deleteByIdValidation = validation((getSchema)=>({
  params: getSchema<IParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  
  }))
}))


export const deleteById = async (req: Request<IParamsProps>, res: Response)=>{
  
    if(Number(req.params.id)=== 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default:"Registro não encontrado"
      }
    })
  
    return res.status(StatusCodes.NO_CONTENT).send()
}