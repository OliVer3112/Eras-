const db = require("./confg/database_config.js");

const User = db.define('user', {
    //defino la tabla user -> con los datos necesarios para la tablar de usuario

    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    study_field: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    hosting_country: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    hosting_city:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }


});

module.exports = User;