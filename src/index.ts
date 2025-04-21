import { server } from './server/Server';

server.listen(process.env.PORT  || 3333, ()=>{
    console.log(`servidor rodando na porta ${process.env.PORT || 3333}`)
})

//neste arquivo estamos importando o servidor e chamando o listen para iniciar o servidor na porta 3333 ou na porta definida na variavel de ambiente PORT.