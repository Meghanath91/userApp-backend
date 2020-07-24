const express = require("express");
const router = express.Router();
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");

//validation inputs
const schema = {
  email: Joi.string().email().required(),
  password: Joi.string().required().min(4),
};

router.post("/", validateWith(schema), (req, res) => {
  const { email, password } = req.body;
  //to get user by email
  const user = usersStore.getUserByEmail(email);
  //for invalid user entry
  if (!user || user.password !== password)
    return res.status(400).send({ error: "Invalid email or password." });

  //to create token
  const token = jwt.sign(
    {
      userId: user.id,
      email,
      address: user.address,
      image: user.images[0].url,
    },
    "jwtPrivateKey"
  );
  res.send(token);
});

module.exports = router;
