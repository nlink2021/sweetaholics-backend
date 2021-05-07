'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('items', 'image', {
        type: Sequelize.STRING,
        allowNull: true
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('items', 'image')
  }
};
