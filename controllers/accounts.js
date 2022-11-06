const db = require("../models")
const Account = db.Account;

module.exports.login = async (req, res) => {
    Account.authenticate(req.body).then((account) => {
        if(account){
            const token = jwt.sign({ data: account }, '123456', {
                expiresIn: '1d'
            })
            res.send({account: account, token: token})
        }
        else{
            res.send(404).send({message: `No account found with email ${req.body.email}`})
        }
    }).catch((err) => {
        res.status(422).send({message: err.message});
    })
}

module.exports.update = (req, res) => {
    Account.update(req.body, {where: {id: req.params.id}}).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}

module.exports.show = (req, res) => {
    Account.findByPk(req.params.id).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}

module.exports.delete = (req, res) => {
    Account.destroy({where: {id: req.params.id}}).then((data) => {
        res.status(200).send({message: "user deleted successfully"})
    }).catch((err) => {
        console.log(err.stack)
        res.status(422).send({message: err.message})
    })
}
