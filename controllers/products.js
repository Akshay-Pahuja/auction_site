const e = require("express");
const db = require("../models");
const Product = db.Product;

module.exports.index = (req, res) => {
    Product.findAll().then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}

module.exports.create = (req, res) => {
    Product.create(req.body).then((data) => {
        res.status(201).send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}

module.exports.update = (req, res) => {
    Product.update(req.body, {where: {id: req.params.id}}).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}

module.exports.show = (req, res) => {
    Product.findByPk(req.params.id).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}

module.exports.delete = (req, res) => {
    Product.destroy({where: {id: req.params.id}}).then((data) => {
        res.status(200).send({message: "user deleted successfully"})
    }).catch((err) => {
        console.log(err.stack)
        res.status(422).send({message: err.message})
    })
}



