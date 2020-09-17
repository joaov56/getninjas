const { Model, DataTypes } = require("sequelize");

class Request extends Model {
  static init(sequelize) {
    super.init(
      {
        user: DataTypes.INTEGER,
        adress_info: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User_Info, {
      foreignKey: "user",
      as: "user_info",
    });
    this.belongsTo(models.Adress_Attributes, {
      foreignKey: "adress_info",
      as: "address_atributes",
    });
  }
}

module.exports = Request;
