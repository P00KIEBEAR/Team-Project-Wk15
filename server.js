const routes = require('./routes');

const path = require('path');
const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(express.json());

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const hbs = exphbs.create({
  helpers: require('./utils/helpers')
});

// Passport
app.use(
  session({
    secret: 'Super secret secret',
    cookie: { expires: 10 * 60 * 1000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  })
); // session secret


app.use(passport.initialize());
app.use(passport.session());

// Handlebars
// const viewsPath = path.join(__dirname, 'views');
// const layoutsPath = path.join(viewsPath, 'layouts');
// const partialsPath = path.join(viewsPath, 'partials');
// app.set('views', viewsPath);



app.use(Express.static('/public'));

app.engine('handlebars', hbs.engine);
app.set('view engine', '.handlebars');


// Models
const models = require('./models');

// Express static assets
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Routes
const authRoute = require('./controllers/login.js')(app, passport);
//app.use(require('./controllers/'));

// Load passport strategies
require('./config/passport/passport.js')(passport, models.user);

// Sync Database
sequelize.sync({ force: false })
  .then(function () {
    console.log('Database Connected');

    app.listen(3001, function (err) {
      if (!err) console.log('Connected at http://localhost:3001');
      else console.log(err);
    });
  })
  .catch(function (err) {
    console.log(err, 'Error on Database Sync. Please try again!');
  });
