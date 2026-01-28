const {createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask}=require("../services/taskService");

// create Contrller Task
const createControllerTask=async(req,res)=>{
    try{
        const task=await createTask(req.body,req.user._id);
        res.status(201).json({
            success:true,
            message:"Task created successfully",
            data:task
        })

    }catch(error){
        res.status(error.statusCode || 500).json({
            success:false,
            message:error.message || "Internal Server Error"
        });
    }
}
// Get All Tasks Controller
const getAllTasksController=async(req,res)=>{
    try{
        

        const tasks=await getAllTasks();
        res.status(200).json({
            success:true,
            count:tasks.length,
            data:tasks
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:"Failed to fetch tasks"
        })
    }
}
// Get Task By Id Controller
const getTaskController=async(req,res)=>{
    try{
        const tasks=await getTaskById(req.user._id);
        res.status(200).json({
            success:true,
            count:tasks.length,
            data:tasks
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:"Failed to fecth your task"
        })
    }
}
// Update Task Controller
const updateTaskController=async(req,res)=>{
    try{
        const {status}=req.body;
        const task=await updateTask(req.params.id,status,req.user._id)
        res.status(200).json({
            success:true,
            message:"Task updated successfully",
            data:task
        })

    }catch(error){
        res.status(error.statusCode || 500).json({
            success:false,
            message:error.message || "Internal Server Error"
        })
    }
}
// Delete Task Controller
const deleteTaskController=async(req,res)=>{
    try{
        const result=await deleteTask(req.params.id);
        res.status(200).json({
            success:true,
            message:result.message
        })

    }catch(error){
        res.status(error.statusCode || 500).json({
            success:false,
            message:error.message || "Internal Server Error"
        })
    }
}
module.exports={
    createControllerTask,
    getAllTasksController,
    getTaskController,
    updateTaskController,
    deleteTaskController
}