const express = require("express");
const RequestController = require("./app/controllers/RequestController");
const routes = express.Router();

routes.post("/create", RequestController.create);
module.exports = routes;
