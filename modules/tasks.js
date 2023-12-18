const mongoose = require("mongoose")

const tastSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"must provide name"],
        trim: true,
        maxlength: [20,'max length not greater than 20']
    },
    completed:Boolean
    
})

module.exports = mongoose.model('Task', tastSchema)