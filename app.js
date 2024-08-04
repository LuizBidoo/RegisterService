const express = require('express') // importando express
const db = require('./db/connection') // importando o ponteiro pro db
const app = express() // iniciando o app como uma instancia de express
const bodyParser = require('body-parser') // iniciando o body-parser para a ler o corpo da req
const routesRegister = require('./routes/registers')

const port = 3001

app.listen(port, () => {
    console.log(`Servidor conectado a porta ${port}`)
})

// utilizando o bodyparser para ler o corpo da requisição
app.use(bodyParser.urlencoded({extended: false}))

// conexão com o db
db.authenticate()
    .then(() => console.log('Db Connected'))
    .catch(err => console.log('Erro ao conectar ao DB', err))

// rota principal
app.get('/', (req, res) => { 
    res.send('Página principal')
})

// rota para todos os métodos
app.use('/register', routesRegister)