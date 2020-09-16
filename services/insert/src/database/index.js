const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);

const User_Info = require("../app/models/User_Info");
const Adress_Info = require("../app/models/Adress_Info");
const Request = require("../app/models/Request");

User_Info.init(connection);
Adress_Info.init(connection);
Request.init(connection);

module.exports = connection;
