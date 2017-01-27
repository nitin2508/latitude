// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path           = require('path');
var cookieParser = require('cookie-parser');
var registerRouter = require('./app/registerRouter');
var statsRouter = require('./app/statsRouter');
var imageUploadRouter = require('./app/imageUploadRouter');
var userRouter = require('./app/userRouter');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./app/models/user');


// configuration ===========================================

// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(cookieParser());
app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(methodOverride('X-HTTP-Method-Override')); // override with the
// X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

//app.set('view engine', 'html');
// app.set('views', path.join(__dirname, '/views')); // Convenience since it's the default anyway.
 app.set('view engine', 'jade');


// routes ==================================================
//require('./app/routes')(app);
 // pass our application into our routes
  app.use('/user',userRouter);
 app.use('/register',registerRouter);
 app.use('/stats',statsRouter);
 app.use('/image',imageUploadRouter);

// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app
