const e = require("express");
const db = require("../models");
const Bid = db.Bid;

module.exports.index = (req, res) => {
    Bid.findAll().then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}

module.exports.create = (req, res) => {
    Bid.create(req.body).then((data) => {
        res.status(201).send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}

module.exports.show = (req, res) => {
    Bid.findByPk(req.params.id).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(422).send({message: err.message})
    })
}



