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
db.city = require('../models/city')(sequelize,DataTypes);
db.state = require('../models/state')(sequelize,DataTypes);

db.user.hasMany(db.city);
db.user.hasMany(db.state);

db.cities = db.user.belongsTo(db.city,{foreignKey : 'userId', as : 'city_data'});
db.states = db.user.belongsTo(db.state,{foreignKey : 'userId', as : 'state_data'});

module.exports = db;