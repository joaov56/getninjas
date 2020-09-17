const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);

const User_Info = require("../app/models/User_Info");
const Address_Attributes = require("../app/models/AddressAttributes");
const Request = require("../app/models/Request");

User_Info.init(connection);
Address_Attributes.init(connection);
Request.init(connection);

User_Info.associate(connection.models);
Address_Attributes.associate(connection.models);
Request.associate(connection.models);

module.exports = connection;
