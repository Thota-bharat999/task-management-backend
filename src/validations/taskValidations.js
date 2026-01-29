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
    .isIn(["bug", "feature", "improvement", "research"])
    .withMessage("Invalid bug type"),
    body("priority")
    .optional()
    .isIn(["Low","Medium","High","Critical"])
    .withMessage("Invalid priority"),
    body("assignedTo")
    .notEmpty()
    .withMessage("AssignedTo user ID is required"),
    body("dueDate")
    .isISO8601()
    .withMessage("Due Date must be a valid date")
];
const updateTaskValidation=[
    body("status")
    .isIn(["todo", "in-progress", "on-hold", "completed"])
    .withMessage("Invalid status value"),
]
module.exports={createTaskValidation,updateTaskValidation}