const e = require("express");
const db = require("../models");
const Supplier = db.Supplier;

module.exports.index = (req, res) => {
    Supplier.findAll().then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}

module.exports.create = (req, res) => {
    Supplier.create(req.body, {include: [{model: Account, as: 'account'}]}).then((data) => {
        res.status(201).send(data)
    }).catch((err) => {
        console.log(error.toJson());
        res.status(422).send({message: err.message})
    })
}

module.exports.update = (req, res) => {
    Supplier.update(req.body, {where: {id: req.params.id}}).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}

module.exports.show = (req, res) => {
    Supplier.findByPk(req.params.id).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}

module.exports.delete = (req, res) => {
    Supplier.destroy({where: {id: req.params.id}}).then((data) => {
        res.status(200).send({message: "user deleted successfully"})
    }).catch((err) => {
        console.log(err.stack)
        res.status(422).send({message: err.message})
    })
}



