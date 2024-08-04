const express = require('express') // importando express
const db = require('./db/connection') // importando o ponteiro pro db
const app = express() // iniciando o app como uma instancia de express

const port = 3001

app.listen(port, () => {
    console.log(`Servidor conectado a porta ${port}`)
})

// conexão com o db
db.authenticate()
    .then(() => console.log('Db Connected'))
    .catch(err => console.log('Erro ao conectar ao DB', err))

// rotas
app.get('/', (req, res) => { 
    res.send('Hello world')
})