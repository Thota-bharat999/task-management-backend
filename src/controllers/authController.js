const {registerUser,loginUser}=require('../services/authService');
// Register Controller 
const registerController=async(req,res)=>{
    try{
        const user=await registerUser(req.body);
        res.status(201).json({
            success:true,
            message:"User Registered Successfully",
            data:user
        })

    }catch(error){
       next(error);

    }
}
// Login Controller
const loginController=async(req,res)=>{
    try{
        const user=await loginUser(req.body);
        res.status(200).json({
            success:true,
            message:"User Logged In Successfully",
            data:user
        })

    }catch(error){
        next(error);
    }
}
module.exports={registerController,loginController}