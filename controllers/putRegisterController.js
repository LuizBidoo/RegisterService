const Register = require("../models/Register");

const putRegister = async (req, res) => {
    const id = req.params.id
    let { title, salary, company, description, email, new_job } = req.body;
    Register.update({
        title,
        description,
        salary,
        company,
        email,
        new_job
    }, 
    {
        where: {
            id,
        }
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
}

module.exports = putRegister