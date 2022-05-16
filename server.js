// importing required modules
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");

// accessing variables inside our config folder in .env file
dotenv.config({ path: "./config/.env" });

// setting up our middleware
app.use(express.json());

// connecting to our local database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to database successfully"))
  .catch((err) => console.log("error ", err));

// routes
app.use("/api/users", require("./routes/UserRoute"));

// launching our server at the specified port
app.listen(process.env.PORT, () => {
  console.log(`server is running at port : ${process.env.PORT}`);
});
