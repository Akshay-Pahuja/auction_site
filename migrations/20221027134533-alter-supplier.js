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
    
      await queryInterface.addColumn(
        'Suppliers', // table name
        'account_id', // new field name
        {
          type: Sequelize.INTEGER,
          references:{
            model:"Accounts",
            key:"id",
          },
          onDelete:"CASCADE",
          allowNull: false,
        },
      )
  },

  async down (queryInterface, Sequelize) {
    /** 
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     
    await queryInterface.removeColumn('Suppliers', 'account_id')
  }
};
