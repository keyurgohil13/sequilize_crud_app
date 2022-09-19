const express = require('express');

const port = 3000;

const app = express();

const path = require('path');

const db = require('./config/sequelize');

app.use(express.urlencoded());

// Use For File PostData Decode
app.use(express.urlencoded());

// Set view engine for ejs template
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

// Use Rotes Folder For Routing
app.use('/', require('./routes'));

db.sequelize.sync({
    force : true
}).then(() => {
    console.log('Sequelize Sync Call');
})
app.listen(port, () =>{
    console.log(`Server is runnig on http://localHost:${port}`);
})