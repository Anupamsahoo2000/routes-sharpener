const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("order list");
});

router.post("/", (req, res) => {
  console.log("order created");
});

module.exports = router;
