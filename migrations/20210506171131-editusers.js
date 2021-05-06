'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('users', 'cartId', {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
    ]);
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'cartId');
  }
};
