
const express = require("express");
const router
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRotes =require("./routes/authRoutes")

const app = express();

app.use(cors());
app.use(express.json());
app.use ("/api,authRoutes")
app.get("/", (req, res) => {
  res.send("Student Management Backend is Running!");
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    
  } catch (error) {
    console.log("MongoDB Connection Error:", error.message);
  }
}

startServer();
