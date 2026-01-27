require("dotenv").config();
const app=require('./src/app')
const ConnectDb=require('./src/config/db')
ConnectDb();
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
});
