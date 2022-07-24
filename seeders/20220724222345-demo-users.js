'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'ana',
        role: 'seller',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'zadoque',
        role: 'manager',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
