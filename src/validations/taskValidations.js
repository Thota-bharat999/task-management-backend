const {body}=require("express-validator");
// Validation Tasks Creation 

const createTaskValidation=[
    body("title")
    .notEmpty()
    .withMessage("Title is required"),
    body("description")
    .notEmpty()
    .withMessage("Description is required"),
    body("bugType")
    .isIn(["Bug", "Feature", "Improvement", "Research"])
    .withMessage("Invalid bug type"),
    body("priority")
    .optional()
    .isIn(["Low","Medium","High","Critical"])
    .withMessage("Invalid priority"),
    body("assignedTo")
    .isMongoId()
    .withMessage("AssignedTo must be a valid MongoDB ID")
    .notEmpty()
    .withMessage("AssignedTo user ID is required"),
    body("dueDate")
    .optional()
    .isISO8601()
    .withMessage("Due Date must be a valid date")
];
const updateTaskValidation=[
    body("status")
    .notEmpty()
    .isIn(["todo", "in-progress", "on-hold", "completed"])
    .withMessage("Invalid status value"),
]
module.exports={createTaskValidation,updateTaskValidation}