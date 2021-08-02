const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Channel = sequelize.define('channel', {
        name: DataTypes.STRING,
        public: DataTypes.BOOLEAN
    });
    return Channel;
};


// // const { DataTypes } = require('sequelize');

// // module.exports = (sequelize) => {
// //     sequelize.define('channel', {
// //         name: DataTypes.STRING,
// //         public: DataTypes.BOOLEAN
// //     });
// // };