module.exports = (sequelize,DataTypes) => {
    const City = sequelize.define('cities', {

        city : {
            type : DataTypes.STRING
        },
        userId : {
            type : DataTypes.INTEGER
        }
    }, {
        timestamps : false
    });

    return City;
}
