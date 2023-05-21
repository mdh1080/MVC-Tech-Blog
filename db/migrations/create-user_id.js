// Purpose: add user_id column to Comment table
// Run this migration with the following command: npx sequelize-cli db:migrate
//
// This migration is based on the following documentation:
// https://sequelize.org/master/manual/migrations.html
// https://sequelize.org/master/class/lib/query-interface.js~QueryInterface.html
// https://sequelize.org/master/class/lib/data-types.js~DATE.html
// https://sequelize.org/master/class/lib/data-types.js~INTEGER.html
// https://sequelize.org/master/class/lib/data-types.js~STRING.html
// https://sequelize.org/master/class/lib/data-types.js~NOW.html
// https://sequelize.org/master/class/lib/data-types.js~BOOLEAN.html
// https://sequelize.org/master/class/lib/data-types.js~DECIMAL.html
// https://sequelize.org/master/class/lib/data-types.js~TEXT.html
// https://sequelize.org/master/class/lib/data-types.js~UUID.html




'use strict';

  //  {import('sequelize-cli').Migration} 
 module.exports = {
   async up (queryInterface, Sequelize) {
   const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn('Comment', 'user_id', { type: Sequelize.DataTypes.INTEGER }, { transaction });
      await queryInterface.addIndex('Comment', 'user_id', { fields: 'user_id', unique: true, transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
