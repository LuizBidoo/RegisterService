const Register = require('../models/Register')

const postRegister = async (req, res) => {
    let {name, email, date, tele} = req.body // dados vindos do body
    Register.create({
      name,
      email,
      date,
      tele
    })
    .then(() => res.redirect('/')) // volta pra home
    .catch(err => console.log('Erro ao criar cadastro', err))
  }
  
  module.exports = postRegister