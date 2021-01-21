const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const hbs = exphbs.create({ helpers });

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// will need to transfer route to controllers, for testing only
app.get('/', (req, res) => {
  res.render('login');
});

//static folder to be decided
//app.use(express.static('/public'));

const PORT = process.env.PORT || 3003;

//starts the server
app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});