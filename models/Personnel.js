const {mongoose} = require('mongoose')
const encrypt = require('../helpers/encryptpass')

const Department = require('../models/Department')

const personnelSchema = new mongoose.Schema({
    deparment : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(value) {
                const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
                return passwordRegex.test(value);
            },
            message: 'Password must contain at least 8 characters, including at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character.'
        },
        set: (pass)=> encrypt(pass)
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
        required: true,
        trim: true,
        validate: {
            validator: function(value) {
                const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return emailRegex.test(value);
            },
            message: 'Please enter a valid email address.'
        }
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

const Personnel = mongoose.model('Personnel', personnelSchema);
