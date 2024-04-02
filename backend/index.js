const express = require("express");
const bodyParser = require("body-parser");
const clientConnect = require("./db");
const signRouter = require("./Router/SignupRoute");
const loginRouter = require("./Router/LoginRoute");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/signup", signRouter);
app.use("/login", loginRouter);
app.use(clientConnect(), clientConnect);

app.get("/", (req, res) => {
  res.send("Connected To Backend");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error Occured : ", err);
  } else {
    console.log("Connected to Backend Log ");
  }
});
