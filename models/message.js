const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define('message', {
        text: DataTypes.STRING,
    });
    return Message
};

// // const { DataTypes } = require('sequelize');

// // module.exports = (sequelize) => {
// //     sequelize.define('message', {
// //         text: DataTypes.STRING,
// //     });
// // };