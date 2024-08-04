const { Sequelize } = require('sequelize')
const db = require('../db/connection')

// Criando modelo do objeto de registro no BD
const Register = db.define('register', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING
    },
    tele: {
        type: Sequelize.STRING
    },
})

// Exportando modelo que será usado no registro
module.exports = Register