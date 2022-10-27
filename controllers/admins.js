const e = require("express");
const db = require("../models");
const Admin = db.Admin;

module.exports.index = (req, res) => {
    Admin.findAll().then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}

module.exports.create = (req, res) => {
    Admin.create(req.body, {include: [{model: Account, as: 'account'}]}).then((data) => {
        res.status(201).send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}

module.exports.update = (req, res) => {
    Admin.update(req.body, {where: {id: req.params.id}}).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}

module.exports.show = (req, res) => {
    Admin.findByPk(req.params.id).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}

module.exports.delete = (req, res) => {
    Admin.destroy({where: {id: req.params.id}}).then((data) => {
        res.status(200).send({message: "user deleted successfully"})
    }).catch((err) => {
        console.log(err.stack)
        res.status(422).send({message: err.message})
    })
}



