const mongoose = require('mongoose');

const dotenv = require('dotenv');
const e = require('express');
require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
}

exports.dbConnection = dbConnection;