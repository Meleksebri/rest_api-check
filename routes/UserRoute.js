const express = require("express");
const User = require("../models/User");

// creating our router to handle user related requests
const router = express.Router();

// get method (all users)
router.get("/", (req, res) => {
  User.find()
    .then((data) => {
      res.status(200).json(data);
      console.log("Users showed successfully");
    })
    .catch((err) => console.log("error : ", err));
});

// post method
router.post("/new_user", (req, res) => {
  User.create(req.body)
    .then((data) => {
      res.status(200).json(data);
      console.log("user added successfully");
    })
    .catch((err) => console.log("error : ", err));
});

// put method
router.put("/:userId", (req, res) => {
  User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
    .then((data) => {
      res.status(200).json(data);
      console.log("User updated successfully");
    })
    .catch((err) => console.log("error : ", err));
});

// delete method
router.delete("/:userId", (req, res) => {
  User.findByIdAndDelete(req.params.userId)
    .then((data) => {
      res.status(200).json("User deleted successfully");
    })
    .catch((err) => console.log("error : ", err));
});
module.exports = router;
