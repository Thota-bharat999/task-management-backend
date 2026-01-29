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
       next(error)
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
        next(error)
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
        next(error)
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
        next(error)
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
       next(error)
    }
}
module.exports={
    createControllerTask,
    getAllTasksController,
    getTaskController,
    updateTaskController,
    deleteTaskController
}