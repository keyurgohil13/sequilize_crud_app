module.exports = (sequelize,DataTypes) => {
    const State = sequelize.define('states', {

        state : {
            type : DataTypes.STRING
        },
        userId : {
            type : DataTypes.INTEGER
        }
    }, {
        timestamps : false
    });

    return State;
}
