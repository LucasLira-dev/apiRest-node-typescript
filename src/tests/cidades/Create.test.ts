
import { testServer } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe('Cidades - Create',()=>{
    it('Cria registro', async()=>{
        
      const res1 =  await testServer
        .post('/cidades')
        .send({
          nome: 'São Paulo',
        })

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');

    })

    it('Não cria registro - nome inválido', async()=>{
        
      const res1 =  await testServer
        .post('/cidades')
        .send({
          nome: 'SP',
        })

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body');

    })

    
});