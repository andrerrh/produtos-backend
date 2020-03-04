const express = require('express');
const mongoose = require('mongoose');
const Produto = require('./schema');

const server = express();

const mongoURL = "mongodb+srv://user:senha@clusterlp3-crunr.mongodb.net/dbproduto?retryWrites=true&w=majority"

const db = mongoose.connect(mongoURL, 
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })

// var produtos = [
//     {
//         id: 1,
//         nome: 'Computador', 
//         preco: 1200.00
//     },
//     {
//         id: 2,
//         nome: 'mouse',
//         preco: 20.50
//     },
//     {
//         id: 4,
//         nome: 'Teclado',
//         preco: 220.90
//     }
// ];

server.use(express.json());


server.get('/produto',  async function(request, response) {
    const produtos = await Produto.find();
    return response.json(produtos);
})

server.get('/produto/:id', async function(request, response) {
    const id = request.params.id;
    const produtos = await Produto.findById(id);
    return response.json(produtos);
})

server.post('/produto', async function(request, response) {
    const novoProduto = request.body;
    await Produto.create(novoProduto);
    return response.status(201).send();
})

server.put('/produto/:id', async function(request, response) {
    const id = request.params.id;
    const produto = request.body;
    console.log(produto)

    await Produto.findByIdAndUpdate(id, produto)

    return response.status(201).send()
})

server.delete('/produto/:id', async function(request, response) {
    const id = request.params.id;
    
    await Produto.findOneAndRemove({_id: id});

    return response.status(200).send();
})

server.listen(3000);
