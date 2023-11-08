const express = require("express");
const app = express();
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')

app.use(express.json())

app.get('/hello', (req,res)=> {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

const port = 3000;

const start = async()=>{
    try {
        
    } catch (error) {
        
    }
}

app.listen(port, console.log(`server is running on port ${port} ...`));