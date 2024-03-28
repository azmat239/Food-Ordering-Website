const express = require("express");
const clientConnect = require("./db");
const app = express();

clientConnect();
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(5000);
