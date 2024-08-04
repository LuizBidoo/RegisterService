const express = require('express') // importando express
const app = express() // iniciando o app como uma instancia de express

const port = 3001

app.listen(port, () => {
    console.log(`Servidor conectado a porta ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello world')
})