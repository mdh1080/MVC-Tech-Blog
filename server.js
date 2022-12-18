const express = require('express');
const sequelize = require('./config/connection');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

sequelize.sync().then(() => {
    app.listen(port)
    console.log(`App listening on port ${port}!`)
});




// const session = require('express-session');


// const mysql = require('mysql2');