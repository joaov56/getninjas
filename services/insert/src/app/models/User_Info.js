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
  static associate(models) {
    this.hasOne(models.Request, {
      foreignKey: "user",
      as: "user_show",
    });
  }
}

module.exports = User_Info;
