'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('users', 'isAdmin', {
        type: Sequelize.BOOLEAN,
        allowNull: true
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'isAdmin')
  }
};
