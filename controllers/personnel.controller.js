const {Personnel} = require('../models/Personnel');

module.exports.Personnel = {

    getAll: async (req, res) => {
        const personnel = await Personnel.find();
        res.status(200).send({
            error: false,
            message: "All personnel",
            data: personnel
        })
    },

    getOne: async (req, res) => {
        const personnel = await Personnel.findById(req.params.id);
        res.status(200).send({
            error: false,
            message: "Personnel found",
            data: personnel
        })
    },

    create: async (req, res) => {
        const personnel = await Personnel.create(req.body);
        res.status(201).send({
            error: false,
            message: "Personnel created",
            data: personnel
        })
    },

    update: async (req, res) => {
        const personnel = await Personnel.findByIdAndUpdate(req
            .params.id, req.body);
        res.status(200).send({
            error: false,
            message: "Personnel updated",
            data: personnel
        })  
    },
    delete: async (req, res) => {
        const personnel = await Personnel.findByIdAndDelete(req.params.id);
        res.status(200).send({
            error: false,
            message: "Personnel deleted",
            data: personnel
        })
    }
}