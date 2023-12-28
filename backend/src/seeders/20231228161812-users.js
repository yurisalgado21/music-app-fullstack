'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        user_name: 'adminzao',
        email: 'admintonzao@gmail.com',
        password: '123456',
      },
    ], {timestamps: false});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
