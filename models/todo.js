'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    tag: DataTypes.STRING,
    description: DataTypes.TEXT,
    color: DataTypes.STRING,
    dueDate: DataTypes.DATE
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};