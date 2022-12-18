const express = require('express');
const sequelize = require('./config/connection');
const { User, Post, Comment } = require('./models');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/api/users', async (req, res) => {
   try {
    const result = await User.create(req.body)
    res.json(result)
    } catch (error) {
        res.json(error)
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

sequelize.sync({force:true}).then(() => {
    app.listen(port)
    console.log(`App listening on port ${port}!`)
});




// const session = require('express-session');


// const mysql = require('mysql2');