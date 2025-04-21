import express from 'express';
import 'dotenv/config';

import router from './routes/index';

const server = express();

server.use(express.json())

server.use(router)


export { server } 

//neste arquivo estamos importando o express e criando uma instancia do servidor, depois estamos importando as rotas e usando o middleware do express para fazer o parse do json e por fim estamos exportando o servidor para ser usado em outros arquivos.