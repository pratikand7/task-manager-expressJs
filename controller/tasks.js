const Task = require('../modules/tasks')

const getAllTask = async (req,res) => {
    try {
       const task = await Task.find({})
       res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg:error});
    }   
}

const getTask = async (req,res) => {
    try {
        const {id:taskId} = req.params;
        const task = await Task.findOne({_id:taskId});
        res.status(201).json({task});

        if(!task){
            return res.status(404).json({msg:"No task found!"})
        }
    } catch (error) {
        res.status(500).json({msg:error});
    }   
}

const updateTask = async (req,res) => {
    try {
        const {id:taskId} = req.params;


    } catch (error) {
        
    }
}

const deleteTask = async (req,res) => {
    try {
        const {id:taskId} = req.params;
        const task = await Task.findOneAndDelete({_id:taskId});
        res.status(201).json({task});

        if(!task){
            return res.status(404).json({msg:"No task found to delete!"})
        }
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}