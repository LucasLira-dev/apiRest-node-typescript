import { Request,  Response } from "express"


import * as yup from 'yup'


import { validation } from "../../shared/middlewares";

interface ICidade{
  nome: string;
  
}




export const createValidation = validation((getSchema)=> ({
  body: getSchema<ICidade>(yup.object().shape({
    nome: yup.string().required().min(3)
  }))
  // params: paramsValidation
}))

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, ICidade>, res: Response)=>{

  res.send("create")

  console.log(req.body);

}
