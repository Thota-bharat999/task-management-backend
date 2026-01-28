const express=require("express");
const router=express.Router();
const authorizeRoles=require("../middlewares/roleMiddleware");
const protect=require("../middlewares/authMiddleware")
const{ createControllerTask, getAllTasksController, getTaskController, updateTaskController,deleteTaskController }=require("../controllers/taskController")

router.post("/task",protect,authorizeRoles(["Admin", "Manager"]),createControllerTask)
router.get("/all",protect,authorizeRoles(["Admin", "Manager"]),getAllTasksController)
router.get("/my",protect,authorizeRoles(["Admin", "Manager", "User"]),getTaskController);
router.patch("/:id/status",protect,authorizeRoles(["Admin", "Manager", "User"]),updateTaskController);
router.delete("/:id",protect,authorizeRoles(["Admin", "Manager"]),deleteTaskController);
module.exports=router