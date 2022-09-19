module.exports.home = function(req, res){

    res.send("This Is Home Page");
}

module.exports.form = function(req, res){

    res.render('form');
}

module.exports.submitForm = function(req, res) {

    
    console.log(req.body);
}