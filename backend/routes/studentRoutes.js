
const express = require("express");
const mongoose = require("mongoose");
const Student = require("../models/Student");

const router = express.Router();

// 1. ADD STUDENT
router.post("/students", async (req, res) => {
  try {
    const { name, email, contact, age } = req.body;

    if (!name || !email || !contact || !age) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const student = await Student.create({
      name,
      email,
      contact,
      age: Number(age)
    });

    res.status(201).json({
      message: "Student added successfully",
      student
    });
  } catch (error) {
    console.error("Add Student Error:", error);

    res.status(500).json({
      message: "Failed to add student"
    });
  }
});

// 2. GET ALL STUDENTS
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find().sort({
      createdAt: -1
    });

    res.status(200).json(students);
  } catch (error) {
    console.error("Get Students Error:", error);

    res.status(500).json({
      message: "Failed to fetch students"
    });
  }
});

// 3. UPDATE STUDENT
router.patch("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        message: "Invalid student ID"
      });
    }

    const { name, email, contact, age } = req.body;

    const student = await Student.findByIdAndUpdate(
      id,
      {
        name,
        email,
        contact,
        age: Number(age)
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json({
      message: "Student updated successfully",
      student
    });
  } catch (error) {
    console.error("Update Student Error:", error);

    res.status(500).json({
      message: "Failed to update student"
    });
  }
});

// 4. DELETE STUDENT
router.delete("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        message: "Invalid student ID"
      });
    }

    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json({
      message: "Student deleted successfully"
    });
  } catch (error) {
    console.error("Delete Student Error:", error);

    res.status(500).json({
      message: "Failed to delete student"
    });
  }
});

module.exports = router;
