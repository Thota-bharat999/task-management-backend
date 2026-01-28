const express=require("express")
const app=express()
const cors=require("cors")
const authRoutes=require('./routes/authRoutes')
const taskRoutes=require("./routes/taskRoutes")

// middleWare to Parse Json 
app.use(cors())
app.use(express.json())





app.use("/api/auth",authRoutes)
app.use("/api/tasks",taskRoutes)

// app.get("/",(req,res)=>{
//     res.send("Task Management API is ruuning")
// })
module.exports=app