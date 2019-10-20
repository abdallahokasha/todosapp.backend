"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      joinDate: DataTypes.DATE,
      username: DataTypes.STRING,
      userType: {
        type: DataTypes.ENUM("admin", "user"),
        defaultValue: "user",
        allowNull: false
      }
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
