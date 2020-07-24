const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const compression = require("compression");
const config = require("config");
const user = require("./routes/user");
const users = require("./routes/users");
const auth = require("./routes/auth");

const app = express();
const route = require("./routes/index");
require("./db/model/User");

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

//routes
app.use("/api/users", users);
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api", route);

const port = process.env.PORT || config.get("port");
app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});
