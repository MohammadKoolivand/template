const express = require("express");

const Router = express.Router();

// config app router
const AppRouter = require("./app");
Router.use("/app", AppRouter);

module.exports = Router;
