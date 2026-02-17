const express=require("express");
const router=express.Router();
const authorizeRoles=require("../middlewares/roleMiddleware");
const protect=require("../middlewares/authMiddleware")
const validate=require("../middlewares/validateMiddleware");
const {createTaskValidation,updateTaskValidation}=require("../validations/taskValidations");
const{ createControllerTask, getAllTasksController, getTaskController,deleteTaskController, getTaskStatisticsController,updateFullTaskController, updateStatusController }=require("../controllers/taskController")

router.post("/task",protect,authorizeRoles(["Admin", "Manager"]),createTaskValidation,validate,createControllerTask)
router.get("/all",protect,authorizeRoles(["Admin", "Manager"]),getAllTasksController)
router.get("/my",protect,authorizeRoles(["Admin", "Manager", "User"]),getTaskController);
router.patch(
  "/:id",
  protect,
  authorizeRoles(["Admin", "Manager"]),
  updateFullTaskController
  
);
router.patch("/:id/status",protect,authorizeRoles(["User"]),updateTaskValidation,validate,updateStatusController)

router.delete("/:id",protect,authorizeRoles(["Admin", "Manager"]),deleteTaskController);
router.get("/statistics",protect,authorizeRoles(["Admin","Manager","User"]),getTaskStatisticsController)
module.exports=router