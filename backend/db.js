const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/FoodWeb";
const clientConnect = async () => {
  const client = await mongoose.connect(url).then(
    async () => {
      console.log("Connected to The db");
    },
    (err) => {
      console.log("error Occured");
    }
  );
};

module.exports = clientConnect;
