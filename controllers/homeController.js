const db = require('../config/sequelize');

const User = db.user;
const City = db.city;
const State = db.state;

module.exports.home = function(req, res){

    res.send("This Is Home Page");
}

module.exports.form = function(req, res){

    res.render('form');
}

module.exports.submitForm =async function(req, res) {

    console.log(req.body);

    let data = await User.create({
        first_name : req.body.fName,last_name : req.body.lName, email : req.body.email, password: req.body.password, gender : req.body.gender, address : req.body.address, city : req.body.cities, state : req.body.states, zip_code : req.body.zipCode,
        city_data : {
            city : req.body.cities
        },
        state_data :{
            state : req.body.states
        }
    },{
        include : [db.cities, db.states]
    })

    res.redirect('back');
}