const express = require("express");
const router = express.Router();

const usersStore = require("../store/users");

const auth = require("../middleware/auth");

router.get("/:id", auth, (req, res) => {
  const userId = parseInt(req.params.id);
  const user = usersStore.getUserById(userId);
  if (!user) return res.status(404).send();

  res.send({
    id: user.id,
    email: user.email,
    address: user.address,
    image: user.images,
  });
});

module.exports = router;
