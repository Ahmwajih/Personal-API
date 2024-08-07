const mongoose = require('mongoose');

const dotenv = require('dotenv');
const e = require('express');
require('dotenv').config();

const dbConnection = function() {
        mongoose.connect(process.env.MONGODB)
            .then(() => console.log('* DB Connected * '))
            .catch((err) => console.log('* DB Not Connected * ', err))
    }

exports.dbConnection = dbConnection;