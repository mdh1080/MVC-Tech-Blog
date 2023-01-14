const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Tech Blog',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// app.engine('handlebars' , exphbs.engine({
//   defaultLayout: 'homepage',
//   layoutsDir: __dirname + '/views/layouts',
// }));

// app.set('view engine', 'handlebars');

// app.get ('/', (req, res, next) => {
//   res.render('homepage', {layout: 'main'});
// });

// app.get ('/login', (req, res) => {
//   res.render('login', {layout: 'main'});
// });

// app.get ('/signup', (req, res) => {
//   res.render('signup', {layout: 'main'});
// });

// app.get ('/dashboard', (req, res) => {
//   res.render('dashboard', {layout: 'main'});
// });

// app.get ('/post', (req, res) => {
//   res.render('post', {layout: 'main'});
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});