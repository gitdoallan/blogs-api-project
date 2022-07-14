'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('BlogPosts');
  }
};
