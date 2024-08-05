const mongoose = require('mongoose')


const personnelSchema = new mongoose.Schema({
    deparment : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true

    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    isActive : {
        type: Boolean,
        required: true
    
    },
    isAdmin : {
        type: Boolean,
        required: true
    },  
    isLead : {
        type: Boolean,
        required: true
    },
    startedAt : {
        type: Date,
        required: true
    }
}, { timestamps: true });    
