import { Router } from 'express';
import {StatusCodes} from 'http-status-codes'

const router = Router();


router.get('/', (req, res) => {
  res.send('Eai!');
});

router.post('/test', (req, res) => {
  console.log(req.body)
  res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

export default router;

//neste arquivo estamos criando as rotas do servidor, a primeira rota é um get que retorna uma string e a segunda rota é um post que retorna o corpo da requisição em json com o status 401.