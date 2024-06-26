const express = require("express");
const User = require("../model/User");
const route = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

route.post(
  "/signup",
  body("email", "Invalid Email").isEmail(),
  body("password", "password Length Should Be 8 Characters").isLength({
    min: 8,
  }),
  body("name", "invalid Name").isLength({ min: 3 }),
  async (req, res) => {
    const hasErrors = validationResult(req);
    if (!hasErrors.isEmpty()) {
      console.log(hasErrors);
      return res.status(400).json({ error: hasErrors.array() });
    }
    let { name, email, location } = req.body;
    const salt = await bcrypt.genSalt(10);
    const securePwd = await bcrypt.hash(req.body.password, salt);
    try {
      let userExist = await User.findOne({ email });
      if (userExist) {
        return res.status(400).json({ Exists: true });
      }
      let userInput = new User({
        name: name,
        password: securePwd,
        email: email,
        location: location,
      });

      if (userInput) {
        await userInput.save();
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    } catch (error) {
      console.log("error Occured", error);
    }
  }
);

module.exports = route;
