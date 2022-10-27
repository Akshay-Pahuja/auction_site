'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn(
        'Accounts', // table name
        'owner_id', // new field name
      ),

    await queryInterface.removeColumn(
        'Accounts', // table name
        'owner_type', // new field name
      )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('Accounts');
     */
     await queryInterface.addColumn(
      'Accounts', // table name
      'owner_id', // new field name
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
     )
     await queryInterface.addColumn(
      'Accounts', // table name
      'owner_type', // new field name
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
     )
 }
}