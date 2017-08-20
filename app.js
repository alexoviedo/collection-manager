  express = require('express'),
  handlebars = require('express-handlebars'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  bluebird = require('bluebird');
  routes = require('./router/routes'),
  mongoose.Promise = bluebird;
  app = express();

  app.engine('handlebars', handlebars({
    defaultLayout: 'main'
  })),

  app.set('views', './views'),
  app.set('view engine', 'handlebars'),

  app.use(express.static('public')),
  app.use(bodyParser.json()),
  app.use(bodyParser.urlencoded({
    extended: !0
  })),

  app.use('/', routes),
  mongoose.connect('mongodb://localhost:27017/guitarCollection', {
    useMongoClient: !0
  }).then(() => app.listen(3e3, () =>
  console.log('Running...')));
