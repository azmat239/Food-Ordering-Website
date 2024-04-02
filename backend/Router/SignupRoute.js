const express = require("express");
const User = require("../model/User");
const route = express.Router();
const { body, validationResult } = require("express-validator");

route.post(
  "/",
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
    let { name, password, email, location } = req.body;
    try {
      let userExist = await User.findOne({ email });
      if (userExist) {
        return res.status(400).json({ "User-Exists": true });
      }
      let userInput = new User({
        name: name,
        password: password,
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
