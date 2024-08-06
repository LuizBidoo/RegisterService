const Register = require("../models/Register")

const deleteRegister = async (req,res) => {
    const id = req.params.id
    Register.destroy({
        where: {
            id,
        }
    })
    .then(() => res.redirect('/'))
    .catch(() => console.log(err))
}

module.exports = deleteRegister