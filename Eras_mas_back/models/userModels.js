const  DataTypes  = require("sequelize");
const db = require("../config/database_config.js");




const User = db.define('user', {
    //defino la tabla user -> con los datos necesarios para la tablar de usuario

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    study_field: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hosting_country: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hosting_city:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }


});

module.exports = User;