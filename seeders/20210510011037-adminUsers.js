'use strict';
const bcrypt = require('bcrypt')
const hashedPassword = bcrypt.hashSync('test', 10)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',[
      {
        name: 'Brianna',
        email: 'adminbri@email.com',
        password: hashedPassword,
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sarah',
        email: 'adminsarah@email.com',
        password: hashedPassword,
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nick',
        email: 'adminnick@email.com',
        password: hashedPassword,
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
