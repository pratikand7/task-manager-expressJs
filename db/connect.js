const mongoose = require("mongoose");

const connection = "mongodb+srv://pratikuymar:Sigma1234@cluster0.lcssvsk.mongodb.net/task-manager?retryWrites=true&w=majority";

mongoose
    .connect(connection)
    .then(()=>console.log('connected to the db...'))
    .catch((err)=>console.log(err));