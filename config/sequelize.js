const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('crud', 'postgres', 'keyur1330', {
    host : 'localhost',
    dialect : 'postgres'
});

sequelize.authenticate().then(() =>{
    console.log("db connected successfully");
}).catch((err) => {
    console.log('db not connected', err);
});


const db = {};

db.sequelize =sequelize;
db.Sequelize = Sequelize;

db.user = require('../models/user')(sequelize,DataTypes);

module.exports = db;