const authorizeRoles = (roles = []) => {
  return (req, res, next) => {
    // console.log("Allowed roles:", roles);
    // console.log("User role:", req.user.role);

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to perform this action",
      });
    }
    next();
  };
};
module.exports=authorizeRoles