const mongoose = require("mongoose")

const tastSchema = new mongoose.Schema({
    name:String,completed:Boolean
    
})

module.exports = mongoose.model('Task', tastSchema)