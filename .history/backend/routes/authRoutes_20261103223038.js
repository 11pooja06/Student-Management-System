
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// Signup API
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, contact } = req.body;

    // Validate input
    if (
      !name?.trim() ||
      !email?.trim() ||
      typeof password !== "string" ||
      password.length < 8 ||
      !contact?.trim()
    ) {
      return res.status(400).json({
        message: "Enter all fields and a password of at least 8 characters"
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check existing user
    const existingUser = await User.findOne({
      email: normalizedEmail
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email already registered"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Save new user
    const newUser = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      contact: contact.trim()
    });

    // Never return the password hash
    res.status(201).json({
      message: "Signup successful",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        contact: newUser.contact
      }
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Email already registered"
      });
    }

    console.error("Signup error:", error);
    res.status(500).json({
      message: "Internal server error"
    });
  }
});

module.exports = router;
