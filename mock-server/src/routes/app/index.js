const express = require("express");

const AppRouter = express.Router();

// config Routes
const SiteController = require("../../controllers/app/siteController");


// GET Method
AppRouter.get("/", SiteController.GetSite);
module.exports = AppRouter;
