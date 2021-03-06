
const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'xcv546',
  resave: false,
  saveUninitialized: true,
}));

const port = 3002

const routers = require('./api');
const sequelize = require('./models').sequelize; // sequelize require
sequelize.sync();


var cors = require('cors')
var bodyParser = require('body-parser')

app.use(cors({
  origin: true,
  credentials: true
}))

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//POST body 등을 편리하게 추출하기 위함
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => res.send('Hello World!'))


//api routes


app.listen(port, () => console.log(`API Server listening on port ${port}`))


process.on('uncaughtException', (err) => {
  console.error("Server uncaughtException : Catch");
  console.error(err);
  process.exit(1);
});

// module.exports = app;
