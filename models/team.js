const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Team = sequelize.define('team', {
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        },
    });
    return Team
};


// // const { DataTypes } = require('sequelize');

// // module.exports = (sequelize) => {
// //     sequelize.define('team', {
// //         name: {
// //             allowNull: false,
// //             type: DataTypes.STRING,
// //             unique: true
// //         },
// //     });
// // };