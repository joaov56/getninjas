const { Model, DataTypes } = require("sequelize");

class Adress_Info extends Model {
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
}

module.exports = Adress_Info;
