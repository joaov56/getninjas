const express = require("express");
const server = express();
const routes = require("./routes");

server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.listen(3000);
