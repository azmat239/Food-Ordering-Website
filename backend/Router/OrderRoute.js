const express = require("express");
const Order = require("../model/Order");
const User = require("../model/User");
const route = express.Router();

route.post("/orderdata", async (req, res) => {
  let { email, orderArray } = req.body;

  let order = await new Order({
    email: email,
    orderArray: [orderArray],
  });
  let orderData = await Order.findOne({ email });
  if (orderData === null) {
    try {
      if (order) {
        await order.save();
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    } catch (error) {
      console.log(error.message);
      res.json({ success: false });
    }
  } else {
    try {
      if (order) {
        await Order.findOneAndUpdate(
          { email },
          {
            $push: { orderArray },
          }
        ).then(() => {
          res.json({ success: true });
        });
      } else {
        res.json({ success: false });
      }
    } catch (error) {
      res.json({ success: false });
    }
  }
});

route.post("/myorders", async (req, res) => {
  let { email } = req.body;
  try {
    let orderData = await Order.findOne({ email: email });
    if (orderData !== null) {
      res.json({
        success: true,
        order: orderData,
      });
    } else {
      res.json({ success: false, order: "Not found" });
    }
  } catch (error) {
    res.json({ success: false });
  }
});

module.exports = route;
