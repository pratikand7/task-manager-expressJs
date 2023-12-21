const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"must provide name"],
        trim: true,
        maxlength: [20,'max length not greater than 20']
    },
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema)