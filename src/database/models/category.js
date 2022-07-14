'use strict';

const createCategoryModel = (sequelize, DataTypes) =>{
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'Categories'
  })
  return Category;
};

module.exports = createCategoryModel;
