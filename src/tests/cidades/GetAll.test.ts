import { StatusCodes} from "http-status-codes"; 

import { testServer} from "../jest.setup";


describe('Cidades - GetAll', () => {
  it('Retorna todos os registros', async () => {
      const res1 = await testServer
        .post('/cidades')
        .send({
          nome: 'Porto Alegre',
        });

      expect(res1.statusCode).toEqual(StatusCodes.CREATED)

      const resBuscada = await testServer
        .get('/cidades')
        .send()

      expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0) // Verifica se o total de registros é maior que 0
      expect(resBuscada.statusCode).toEqual(StatusCodes.OK)
      expect(resBuscada.body.length).toBeGreaterThan(0) // faz a verificação se o body é maior que 0
  })

})