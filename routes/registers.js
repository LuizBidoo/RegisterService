const express = require('express')
const router = express.Router()
const postRegister = require('../controllers/postRegisterController')

// rota GET teste
router.get('/test', (req, res) => {
    res.send('Deu certo')
}) 

// rota POST para vagas
router.post('/add', postRegister)

module.exports = router