# Project Title
Task Management System – Backend API

# Project Description
This is a RESTful backend API for a Task Management System that helps teams manage tasks with role-based access control. It supports authentication, task creation, assignment, tracking, and status updates using a clean service-controller architecture.

# Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt for password security
- express-validator for validation
# Features
- User Authentication (Register, Login)
- JWT based authorization
- Role based access (Admin, Manager, User)
- Task creation and assignment
- Task lifecycle management (To Do, In Progress, Completed)
- Centralized error handling
- Input validation
- Secure password hashing
# Project Structure
src/
├── config/
├── controllers/
├── services/
├── models/
├── routes/
├── middlewares/
├── validations/
└── utils/
# Setup Instructions
1. Clone the repository
2. Run: npm install
3. Create .env file
4. Add:
   PORT=5000
   MONGO_URI=your_mongodb_url
   JWT_SECRET=your_secret
5. Run:
   npm run dev
# API Endpoints

Auth:
POST /api/auth/register
POST /api/auth/login
Tasks:
POST    /api/tasks
GET     /api/tasks
GET     /api/tasks/my
PATCH   /api/tasks/:id/status
DELETE  /api/tasks/:id
# Security
Passwords are hashed using bcrypt.
JWT tokens are used for authentication.
Routes are protected using middleware.
# Testing
All APIs were tested using Postman.
# Future Enhancements
- Pagination and filtering
- Task statistics
- Frontend UI
- Deployment

