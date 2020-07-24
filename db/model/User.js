const mongoose = require("mongoose");

const User = new mongoose.Schema({
  email: { type: String, default: "", trim: true },
  password: { type: String, default: "", trim: true },
  address: { type: String, default: "", trim: true },
  image: { type: String, default: "" },
});

module.exports = mongoose.model("User", User);
