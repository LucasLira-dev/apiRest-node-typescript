import { StatusCodes } from "http-status-codes";

import { testServer } from "../jest.setup";

describe('Cidades - UpdateById', () => {
  it('atualiza registro pelo ID', async () => {
      const res1 = await testServer
        .post('/cidades')
        .send({
          nome: 'São Paulo',
        });

      expect(res1.statusCode).toEqual(StatusCodes.CREATED)

      const resAtualizada = await testServer
        .put(`/cidades/${res1.body}`)
        .send({
          nome: 'São Pauloo',
        });
        
      expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT)
    })

  it('Tenta atualizar registro que não existe', async () => {
    const res1 = await testServer
      .put('/cidades/99999')
      .send({
        nome: 'São Pauloo',
      });

    expect(res1.statusCode).toBe(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(res1.body).toHaveProperty('errors.default')
  })
})