"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("request", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users_info",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "RESTRICT",
        },
      },
      adress_info: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "address_attributes",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "RESTRICT",
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
