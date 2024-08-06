const express = require('express')
const router = express.Router()
const postRegister = require('../controllers/postRegisterController')
const deleteRegister = require('../controllers/deleteRegisterController')

// route get test
router.get('/test', (req, res) => {
    res.send('Deu certo')
}) 

// route post for registers
router.post('/add', postRegister)

// route delete for registers
router.delete('/delete/:id', deleteRegister)

module.exports = router