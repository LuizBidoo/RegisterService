const express = require('express')
const router = express.Router()
const Register = require('../models/Register')

// rota GET teste
router.get('/test', (req, res) => {
    res.send('Deu certo')
}) 

// rota POST para vagas
router.post('/add', (req, res) => {
  let {name, email, date, tele} = req.body // dados vindos do body
  Register.create({
    name,
    email,
    date,
    tele
  })
  .then(() => res.redirect('/')) // volta pra home
  .catch(err => console.log('Erro ao criar cadastro', err))
})

module.exports = router