'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.item.belongsToMany(models.cart,{through: 'cartItem' })
      models.item.belongsToMany(models.order,{through: 'orderItem'})
    }
  };
  item.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};