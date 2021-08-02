const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Member = sequelize.define('member', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        username: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                is: /^\w{3,}$/
            }
        },
    });
    return Member
};

// // const { DataTypes } = require('sequelize');

// // module.exports = (sequelize) => {
// //     sequelize.define('member', {
// //         id: {
// //             allowNull: false,
// //             autoIncrement: true,
// //             primaryKey: true,
// //             type: DataTypes.INTEGER
// //         },
// //         username: {
// //             allowNull: false,
// //             type: DataTypes.STRING,
// //             validate: {
// //                 is: /^\w{3,}$/
// //             }
// //         },
// //     });
// // };