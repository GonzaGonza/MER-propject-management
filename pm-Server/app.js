const express = require('express');
const path = require('path');
const logger = require ("morgan");
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require('cors');
require("dotenv").config();

//ROUTES
const auth = require("./routes/auth");
const project = require('./routes/project-routes');
const task = require('./routes/task-routes');


// MONGOOSE CONNECTION
mongoose
  // .connect('mongodb://localhost/project-management-server', {useNewUrlParser: true})
  .connect(process.env.MONGODB_URI, {
    keepAlive:true,
    useNewUrlParser:true,
    reconnectTries:Number.MAX_VALUE,
    useFindAndModify:false
  })
  .then(() => console.log(`Connected to Mongo database ! `))
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

app.disable('etag');


//EXPRESS SERVER INSTANCE
const app = express();


// CORS SETTINGS TO ALLOW CROSS-ORIGIN INTERACTION:
app.use(cors({
  origin: ['http://localhost:3000'] // <== this will be the URL of the React app (it will be running on port 3000)
}));
// =====>EDIT CORS LATER TO FOLLOWING CONFIGURATION
// app.use(
//   cors({
//     credentials: true,
//     origin: [process.env.PUBLIC_DOMAIN]
//   })
// );


// SESSION MIDDLEWARE
app.use(
  session({
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 * 7 // 7 days
    }),
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized:true,
    cookie: {
      maxAge: 24 * 60 * 60 * 365
    }
  })
)


// MIDDLEWARE SETUP
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// ROUTER MIDDLEWARE:

app.use('/"auth', auth);
app.use('/projects', project);
app.use('/api/task', task);


//404
//catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ code: "not found" });
});


// 404
// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({
    code: "not found"
  });
});


// ERROR HANDLING
app.use((err, req, res, next) => {
  // always log the error
  console.error("ERROR", req.method, req.path, err);

  // only send the error if the error ocurred before sending the response
  // (don't try to send the response after it has already been sent)
  if (!res.headersSent) {
    const statusError = err.status || "500";
    res.status(statusError).json(err);
  }
});


module.exports = app;