const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Random@TokenSecret12324567899'

// Create a user using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("name").isLength({ min: 3 }).withMessage("Please enter a Valid name"),
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    //if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    

    console.log(req.body);

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Email already exists" }] });
      }

      // encrpt the password
      const salt= await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt)

      user = new User({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      await user.save();

      // res.status(201).json(user);

      const data = { user: { id: user.id}};
      const authToken = jwt.sign(data, JWT_SECRET)

      res.json({
        token: authToken,
        // user: {
        //   id: user.id,
        //   name: user.name,
        //   email: user.email
        // }
      })

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
