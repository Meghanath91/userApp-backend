//importing dependencies
const express = require("express");
const router = express.Router();

//this is a test route
router.get("/ping", (req, res) => {
  res.status(200).json({
    success: "true",
  });
});
module.exports = router;
