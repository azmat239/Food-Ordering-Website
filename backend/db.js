const mongoose = require("mongoose");
const url =
  "mongodb+srv://azmat1901219:jeenu533688@cluster0.8evzzyq.mongodb.net/FooReso";
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
      console.log("error Occured");
    }
  );
};

module.exports = clientConnect;
