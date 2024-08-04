// arquivo de conexão com o bd
const { Sequelize } = require('sequelize')

// conexão com o banco (instancia do sequelize)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
})

// exportando o ponteiro pro banco
module.exports = sequelize