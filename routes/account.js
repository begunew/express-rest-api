const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  User.findOne({ username, password }, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if (!user) {
      return res.status(404).send();
    }
    return res.status(200).send();
  });
});

router.post("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let firstname = req.body.firstname;

  let newUser = new User();
  console.log("User created: " + username + " " + firstname);
  newUser.username = username;
  newUser.password = password;
  newUser.firstname = firstname;

  newUser.save((err, savedUser) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
});

module.exports = router;
