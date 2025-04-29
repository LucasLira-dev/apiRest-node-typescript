import { Router } from 'express';
// import {StatusCodes} from 'http-status-codes'

import { CidadesController} from '../../controllers'

const router = Router();


router.get('/', (req, res) => {
  res.send('Eai!');
});

router.post('/cidades', CidadesController.createValidation, CidadesController.create)

export default router;

//neste arquivo estamos criando as rotas do servidor, a primeira rota é um get que retorna uma string e a segunda rota é um post que retorna o corpo da requisição em json com o status 401.