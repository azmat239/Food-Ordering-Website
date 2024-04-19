const mongoose = require("mongoose");
const schema = mongoose.Schema;

const orderSchema = schema([
  {
    Date: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
    email: {
      type: String,
      required: true,
    },
    orderArray: {
      type: Array,
      required: true,
    },
  },
]);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
