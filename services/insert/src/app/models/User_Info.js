const { Model, DataTypes } = require("sequelize");

class User_Info extends Model {
  static init(sequelize) {
    super.init(
      {
        phone: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User_Info;
