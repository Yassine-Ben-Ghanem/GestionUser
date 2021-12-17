const { Router } = require("express");
const express = require("express");
const User = require("../Models/User");
const router = express.Router();

//Get Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

//Post User
router.post("/", async (req, res) => {
  const user = new User({
    last_name: req.body.last_name,
    first_name: req.body.first_name,
    login: req.body.login,
    password: req.body.password,
  });

  try {
    const savedUser = await user.save();
  } catch (err) {
    res.json({ message: err });
  }
});

//Get specific User
router.get("/:UserId", async (req, res) => {
  try {
    const user = await User.findById(req.params.UserId);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete User
router.delete("/:UserId", async (req, res) => {
  try {
    const Removeduser = await User.remove({ _id: req.params.UserId });
    res.json(Removeduser);
  } catch (error) {
    res.json({ message: error });
  }
});

//Update a user
router.patch("/UserId", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.params.UserId },
      { first_name: req.body.first_name }
    );
    res.json(updatedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
