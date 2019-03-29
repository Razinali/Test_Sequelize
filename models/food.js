module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("food", {
      name: {
        type: DataTypes.STRING,
        defaultValue: 'Hello',
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        defaultValue: 'World',
        allowNull: false,
      },
      price: {
        type: DataTypes.INT,
        allowNull: false,
      }
    });
    return Users;
  };