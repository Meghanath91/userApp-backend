const express = require("express");
const router = express.Router();
const Joi = require("joi");
const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");
const User = require("../db/model/User");

//schema for validations
const schema = {
  email: Joi.string().email().required(),
  password: Joi.string().required().min(4),
  address: Joi.string().required(),
  images: Joi.array().optional(),
};

//to post a user
router.post("/", validateWith(schema), async (req, res) => {
  const { email, password, address, images } = req.body;
  if (usersStore.getUserByEmail(email))
    return res
      .status(400)
      .send({ error: "A user with the given email already exists." });

  const user = { email, password, address, images };
  await usersStore.addUser(user);

  res.status(201).send(user);
});

module.exports = router;
