const express = require("express");
const app = express();
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
require('dotenv').config()

app.use(express.json())

app.get('/hello', (req,res)=> {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

const port = 3000;

const start = async()=>{
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, console.log(`server is running on port ${port} ...`));
    } catch (error) {
        console.log(error)
    }
}

start()

