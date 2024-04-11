const express = require("express");
const router = express.Router();

router.post("/datafetch", (req, res) => {
  try {
    res.send([global.items, global.foodCategory]);
  } catch (error) {
    console.log("error", error);
    res.send("Error Message ");
  }
});

module.exports = router;
