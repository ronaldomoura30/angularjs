const port = 3003

const bodyParser = require('body-parser');
const express = require('express');
const server = express();

// urlencoded - É o formato dos dados (formulário) frontend para o servidor
// {extended:true} - bodyParser é capaz de interpretar mais tipos de informações (formulario)
// use (Todas as requisições)- Toda requisição do servidor, vai passar pelo middleware urlencoded
// use (Todas as requisições)- Interpretação para caso seja json fazer parser para o backend
//middleware - É o método que recebe (req, res e next) como parametros
// next - Cadeia de responsabilidade para chamar outros middleware
//utilizar res.send no ultimo middleware para retornar a resposta para tela
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

server.listen(port, function(){
    console.log(`Backend is running on port ${port}`);
})

// server.use(function(req, res, next){
//   console.log(`Meu middleware 1`);
//   next();
// })
//
// server.use(function(req, res, next){
//   console.log(`Meu middleware 2`);
//   res.send('Funcionou novamente!!!')
// })
