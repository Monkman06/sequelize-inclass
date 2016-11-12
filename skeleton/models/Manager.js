'use strict';
module.exports = function(sequelize, DataTypes) {
  var Manager = sequelize.define('Manager', {
    fullName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Manager.belongsToMany(models.User,{through: 'UserUniform'});
      	// TODO
      	// ====
      	// Add a belongs-to-many assocation with the Store model
      	// and a has-one relationship with the Uniform model
      }
    }
  });
  return Manager;
};