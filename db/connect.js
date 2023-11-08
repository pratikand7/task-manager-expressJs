const mongoose = require("mongoose");

const connection = "mongodb+srv://pratikuymar:Sigma1234@cluster0.lcssvsk.mongodb.net/task-manager?retryWrites=true&w=majority";

const connectDb = (url) => {
    return mongoose
    .connect(connection, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDb
