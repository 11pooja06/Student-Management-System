
const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// Add Student API
router.post("/students", async (req, res) => {
  try {
    const { name, email, contact, age } = req.body;

    const newStudent = await Student.create({
      name,
      email,
      contact,
      age: Number(age)
    });

    res.status(201).json({
      message: "Student added successfully",
      student: newStudent
    });

  } catch (error) {
    console.log("Error:", error);

    res.status(500).json({
      message: "Failed to add student"
    });
  }
});

module.exports = router;
