const mongoose = require("mongoose");
const url = "mongodb://localhost:27017";
const client = mongoose;
const clientConnect = () => {
  client.connect(url).then(() => console.log("Connected"));
  var food = client.model("FoodWeb");
  food.find({}, (err, data) => console.log(err, data, data.length));
};

module.exports = clientConnect;
