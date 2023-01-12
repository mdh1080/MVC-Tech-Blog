const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers/api');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

const app = express();

const sess = {
    secret: 'techblog',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };
  
  app.use(session(sess));

  app.engine('handlebars' , exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
  }));

app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views/layouts');

const helper = exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public/')));



const port = process.env.PORT || 3001;

app.use(routes);

app.get('/', (req, res) => {
    res.render ('dashboard', {layout: 'main'});
});

sequelize.sync({force:true}).then(() => {
    app.listen(port)
    console.log(`App listening on port ${port}!`)
});