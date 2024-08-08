const {mongoose} = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, { collection: "departments",
    timestamps: true });

const Department = mongoose.model('Department', departmentSchema);