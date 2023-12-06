require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to LeafLuxe server" });
});

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
