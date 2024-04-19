const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const url = process.env.MONGODBURL;

const clientConnect = async () => {
  await mongoose.connect(url).then(
    async () => {
      console.log("Connected to The db");
      const fooditems = mongoose.connection.db.collection("fooditems");
      const foodCategory = mongoose.connection.db.collection("FoodCategory");
      global.items = await fooditems.find({}).toArray();
      global.foodCategory = await foodCategory.find({}).toArray();
    },
    (err) => {
      console.log("error Occured", err.message);
    }
  );
};

module.exports = clientConnect;
