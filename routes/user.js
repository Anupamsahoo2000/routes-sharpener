const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("user list");
});

router.post("/", (req, res) => {
  console.log("user created");
});

module.exports = router;
