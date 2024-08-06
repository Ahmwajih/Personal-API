  const mongoose = require('mongoose');
const { Department } = require('../models/Department');

  module.exports.Department = {
    getAll: async (req, res) => {
        const departments = await Department.find();
        res.status(200).send(({
            error: false,
            message: "All departments",
            data: departments
        }))
    },
    getOne: async (req, res) => {
        const department = await Department.findById(req.params.id);
        res.status(200).send({
            error: false,
            message: "Department found",
            data: department
        })
    },

    create: async (req, res) => {
        const department = await Department.create(req.body);
        res.status(201).send({
            error: false,
            message: "Department created",
            data: department
        })
    },

    update: async (req, res) => {
        const department = await Department.findByIdAndUpdate(req.params.id , req.body );
        res.status(200).send({
            error: false,
            message: "Department updated",
            data: department
        })
    },

    delete: async (req, res) => {
        const department = await Department.findByIdAndDelete(req.params.id);
        res.status(200).send({
            error: false,
            message: "Department deleted",
            data: department
        })
    }

    }