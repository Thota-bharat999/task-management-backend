const {createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
    getTaskStatistics}=require("../services/taskService");


// create Contrller Task
const createControllerTask=async(req,res,next)=>{
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
const getAllTasksController=async(req,res,next)=>{
    try{
        

        const result=await getAllTasks(req.query);
        res.status(200).json({
      success: true,
      totalTasks: result.totalTasks,
      currentPage: result.currentPage,
      totalPages: result.totalPages,
      count: result.tasks.length,
      data: result.tasks,
        })

    }catch(error){
        next(error)
    }
}
// Get Task By Id Controller
const getTaskController=async(req,res,next)=>{
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
const updateTaskController=async(req,res,next)=>{
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
const deleteTaskController=async(req,res,next)=>{
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
// Get Task Statistics Controller
const getTaskStatisticsController=async(req,res,next)=>{
    try{
        const data=await getTaskStatistics();
        res.status(200).json({
            success:true,
            data
        });
    }catch(error){
        next(error)
    }

}
module.exports={
    createControllerTask,
    getAllTasksController,
    getTaskController,
    updateTaskController,
    deleteTaskController,
    getTaskStatisticsController
}