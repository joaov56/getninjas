const { Model, DataTypes } = require("sequelize");

class User_Info extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        cpf: DataTypes.STRING,
        code: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User_Info;
