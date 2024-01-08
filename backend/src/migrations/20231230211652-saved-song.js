'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('saved_song', {
      save_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      artist_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      album_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      song_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      track_id: {
        type: Sequelize.INTEGER,
      },
      preview_url: {
        type: Sequelize.STRING,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('saved_song');
  }
};
