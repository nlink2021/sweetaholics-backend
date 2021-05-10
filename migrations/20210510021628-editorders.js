'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('orders', 'shipped', {
        type: Sequelize.BOOLEAN,
        allowNull: true
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('orders', 'shipped')
  }
};
