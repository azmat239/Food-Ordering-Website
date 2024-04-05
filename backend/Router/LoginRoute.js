const express = require("express");
const User = require("../model/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secretJwt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#1@";
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
      const userData = await User.findOne({ email });
      if (userData) {
        const pwdCheck = await bcrypt.compare(password, userData.password);
        if (userData.email === email && pwdCheck) {
          const data = {
            user: {
              id: userData._id,
            },
          };
          const authToken = jwt.sign(data, secretJwt);
          res.json({ success: true, authToken: authToken });
        } else {
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
