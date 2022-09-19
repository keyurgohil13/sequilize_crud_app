module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('users', {
    
        first_name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        last_name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        },
        gender : {
            type : DataTypes.STRING,
            allowNull : false
        },
        address : {
            type : DataTypes.STRING
        },
        city :{
            type : DataTypes.STRING,
            allowNull : false
        },
        state : {
            type : DataTypes.STRING,
            allowNull : false
        },
        zip_code : {
            type : DataTypes.INTEGER
        }
    }, {
        timestamps : false
    });

    return User;
}
