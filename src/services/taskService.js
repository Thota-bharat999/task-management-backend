const Task=require('../models/taskModel');
const User=require('../models/userModel')

// Create a new task 
const createTask=async(data, creatorId)=>{
    const {title,description,bugType,priority,assignedTo,dueDate}=data
    const user=await User.findById(assignedTo);
    if(!user){
        const error=new Error("Assigned user not found");
        error.statusCode=404;
        throw error;
    }
    const task =new Task({
        title,
        description,
        bugType,
        priority,
        assignedTo,
        createdBy:creatorId,
        dueDate
    })
    await task.save()
    return task

}
// Get ALL Tasks
const getAllTasks=async(queryParams = {})=>{
    const{page=1,limit=10,status,priority}=queryParams;
    const filter={};
    if(status){
        filter.status=status
    }
    if(priority){
        filter.priority=priority
    }
    const skip=(Number(page)-1)*Number(limit)
  
    const tasks=await Task.find(filter)
    .populate("assignedTo","name,email,role")
    .populate("createdBy","name,email,role")
    .skip(skip)
    .limit(Number(limit))
    .sort({createdAt:-1})
    const totalTasks=await Task.countDocuments(filter)
    return{
        totalTasks,
        currentPage:Number(page),
        totalPages:Math.ceil(totalTasks/Number(limit)),
        tasks,
    }
     
}
// Get Task by Id
const getTaskById=async(userId)=>{
    const tasks=await Task.find({assignedTo:userId})
    .populate("createdBy","name,email,role");
    return tasks
}
// upadte Task
const updateTask=async(taskId,status,userId)=>{
    const task=await Task.findById(taskId);
    if(!task){
        const error=new Error("Task not found");
        error.statusCode=404;
        throw error;

    }
    if(task.assignedTo.toString() !== userId.toString()){
        const error=new Error("You are not allowed to update this task");
        error.statusCode=403;
        throw error;
    }
    task.status=status;
    await task.save();
    return task;
}
// Delete Task 
const deleteTask=async(taskId)=>{
    const task=await Task.findById(taskId);
    if(!task){
        const error=new Error("Task not found");
        error.statusCode=404;
        throw error;
    }
    await task.deleteOne();
    return{message:"Task deleted successfully"}
}
// add Task statics 
const getTaskStatistics=async()=>{
    const totalTasks=await Task.countDocuments();
    const completedTasks=await Task.countDocuments({
        status:"Completed"
    })
    const pendingTasks=await Task.countDocuments({
        status:{$ne:"Completed"}
    })
    const overDueTasks=await Task.countDocuments({
        status:{$ne:"Completed"},
        dueDate:{$lt:new Date()}
    })
    return{
        totalTasks,
        completedTasks,
        pendingTasks,
        overDueTasks

    }
}

module.exports={
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
    getTaskStatistics
}