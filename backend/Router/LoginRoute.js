const express = require("express");
const User = require("../model/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  body("email", "Invalid Email").isEmail(),
  body("password").isLength({
    min: 8,
  }),
  async (req, res) => {
    const hasErrors = validationResult(req);
    if (!hasErrors.isEmpty()) {
      return res.status(400).json({ error: hasErrors.array() });
    }
    try {
      let { email, password } = req.body;
      const data = await User.findOne({ email });
      if (data) {
        if (data.email === email && data.password === password) {
          console.log("Valid Credentials");
          res.json({ success: true });
        } else {
          console.log("inValid Credentials");
          res.json({ success: false });
        }
      } else {
        res.json({ success: false });
      }
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
