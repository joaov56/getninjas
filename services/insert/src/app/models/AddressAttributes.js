const { Model, DataTypes } = require("sequelize");

class Adress_Attributes extends Model {
  static init(sequelize) {
    super.init(
      {
        city: DataTypes.STRING,
        neighborhood: DataTypes.STRING,
        street: DataTypes.STRING,
        uf: DataTypes.STRING,
        zip_code: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasOne(models.Request, {
      foreignKey: "adress_info",
      as: "address_show",
    });
  }
}

module.exports = Adress_Attributes;
