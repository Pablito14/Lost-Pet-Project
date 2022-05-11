const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init({
    // add properites here, ex:
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    name: {
        type:DataTypes.STRING,
        allowNull:false
    },
    petDescription: {
         type: DataTypes.STRING,
         allowNull:false
    },
    currentStatus: {
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    animal: {
        type:DataTypes.STRING,
        allowNull:false
    },
    breed: {
        type:DataTypes.STRING,
        allowNull:false
    },
    color: {
        type:DataTypes.STRING,
        allowNull:false
    },
    lastLocation: {
        type:DataTypes.STRING,
        allowNull:false
    },
    lastTime: {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    picture: {
        type:DataTypes.STRING,
        //or type: Sequelize.BLOB -- allow null?
        
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
    },
},{
    sequelize
});

module.exports=Pet