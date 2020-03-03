const mongoose = require('mongoose');

var produto = mongoose.Schema({
    nome: String,
    preco: Number
})

module.exports = mongoose.model('Produto', produto)