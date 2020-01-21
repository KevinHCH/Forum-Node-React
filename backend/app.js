const express = require("express");
const cors = require("cors");
const app = express();

module.exports = app;

// settings
app.set("port", process.env.APP_PORT || 5000);

app.use(cors());
app.use(express.json());

app.use("/api/users", require("./src/API/Users"));
app.use("/api/post", require("./src/API/Posts"));
app.use("/api/comment", require("./src/API/Comments"));
