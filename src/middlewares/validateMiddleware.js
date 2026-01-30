const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("VALIDATION ERRORS 👉", errors.array()); // 🔥 ADD THIS

    return res.status(400).json({
      success: false,
      message: "Validation Error",
      errors: errors.array(), // 🔥 SHOW EXACT FIELD ERROR
    });
  }

  next();
};

module.exports = validate;
