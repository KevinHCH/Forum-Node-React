const express = require("express");
const cors = require("cors");
const app = express();

const {login, isAuthenticated} = require('./src/Controllers/AuthController')
module.exports = app;

// settings
app.set("port", process.env.APP_PORT || 5000);

app.use(cors());
app.use(express.json());

// app.use("/api/users", isAuthenticated,require("./src/API/Users"));
// app.use("/api/post", isAuthenticated,require("./src/API/Posts"));
// app.use("/api/comment", isAuthenticated,require("./src/API/Comments"));

// Cuando el front este hecho, se deben proteger las rutas
app.use("/api/users", require("./src/API/Users"));
app.use("/api/post", require("./src/API/Posts"));
app.use("/api/comment", require("./src/API/Comments"));
