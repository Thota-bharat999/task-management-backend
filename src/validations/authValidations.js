const {body}=require("express-validator");

// Validation for User Registration
const registerValidation=[
    body("name")
    .notEmpty()
    .withMessage("Name is required"),
    body("email")
    .notEmpty()
    .withMessage("Valid email is required"),
    body("password")
    .notEmpty()
    .withMessage("Password is valid atleast 6 characters"),
    body("role")
    .optional()
    .isIn(["admin", "manager", "user"])
    .withMessage("Invalid role")
];
const loginValidation=[
    body("email")
    .notEmpty()
    .withMessage("valid email is required"),
    body("password")
    .notEmpty()
    .withMessage("password is required")
]
module.exports={registerValidation,loginValidation}