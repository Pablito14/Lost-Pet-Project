const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init({
    // add properites here, ex:
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
        type:DataTypes.BLOB,
        //or type: Sequelize.BLOB
        
    }
},{
    sequelize
});

module.exports=Pet