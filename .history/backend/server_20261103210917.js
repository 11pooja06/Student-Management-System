const express =require("express");
const cors = require("cors");
const { createLogger } = require("vite");
require ("dotenv").config();

const app =express();
app.use (cors())
app.use(express.json());

app.get ("/", (req,res)=> {
    res.send("student management system is running!");
}
);

const PORT =process.env.PORT || 5000;
async function startServer(){
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})