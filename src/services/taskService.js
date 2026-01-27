const Task=required('../models/taskModel');
const User=required('../models/userModel')

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
    return task

}
// Get ALL Tasks
const getAllTasks=async()=>{
    const tasks=await Task.find()
    .populate("assignedTo","name,email,role")
    .populate("createdBy","name,email,role");
    return tasks
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
    const task=await task.findById(taskId);
    if(!task){
        const error=new Error("Task not found");
        error.statusCode=404;
        throw error;
    }
    await task.deleteOne();
    return{message:"Task deleted successfully"}
}

module.exports={
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
}