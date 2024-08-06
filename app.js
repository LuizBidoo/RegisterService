const express = require('express') 
const db = require('./db/connection') // importing db pointer
const app = express()
const bodyParser = require('body-parser')
const routesRegister = require('./routes/registers') // importing router

const port = 3001

// listening to port 3001
app.listen(port, () => {
    console.log(`Servidor conectado a porta ${port}`)
})

// body-parser to read the req body
app.use(bodyParser.urlencoded({extended: false}))

// db connection aunthentication
db.authenticate()
    .then(() => console.log('Db Connected'))
    .catch(err => console.log('Erro ao conectar ao DB', err))

// route / (main page)
app.get('/', (req, res) => { 
    res.send('Página principal')
})

// main route for all methods
app.use('/register', routesRegister)