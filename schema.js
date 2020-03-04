const mongoose = require('mongoose');

var produtoSchema = mongoose.Schema({
    nome: String,
    preco: Number
})

module.exports = mongoose.model('Produto', produtoSchema)