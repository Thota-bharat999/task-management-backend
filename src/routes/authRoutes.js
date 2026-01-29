const express=require("express");
const router=express.Router();
const {registerController,loginController}=require('../controllers/authController')
const validate=require("../middlewares/validateMiddleware");
const {registerValidation,loginValidation}=require("../validations/authValidations")

router.post("/register", registerValidation, validate, registerController)
router.post("/login", loginValidation, validate, loginController)
module.exports=router