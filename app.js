                var express = require('express');
                var path = require('path');
                var favicon = require('serve-favicon');
                var logger = require('morgan');
                var cookieParser = require('cookie-parser');
                var bodyParser = require('body-parser');
                var mongoose = require('mongoose');
                var passport = require('passport');
                var LocalStrategy = require('passport-local').Strategy;
                var config = require('./config');
                
                mongoose.connect(config.mongoUrl);
                var db = mongoose.connection;
                db.on('error',console.error.bind(console,'connection error:'));
                db.once('open',function(){
                   console.log("Connected correctly to server"); 
                });

                var routes = require('./routes/index');
                var users = require('./routes/users');
                var newsRouter = require('./routes/newsRouter');
                var cityRouter = require('./routes/cityRouter');
                var imageRouter = require('./routes/imageRouter');
                var mayorRouter = require('./routes/mayorRouter');
                var deputyMayorRouter = require('./routes/deputyMayorRouter');
                var firstTheatreRouter = require('./routes/firstTheatreRouter');
                var secondTheatreRouter = require('./routes/secondTheatreRouter');
                var basillicaRouter = require('./routes/basillicaRouter');
                var bezesteniRouter = require('./routes/bezesteniRouter');
                var millRouter = require('./routes/millRouter');
                var parkRouter = require('./routes/parkRouter');
                var churchRouter = require('./routes/churchRouter');
                var announcementsRouter = require('./routes/announcementsRouter');
                var eventsRouter = require('./routes/eventsRouter');
                var app = express();
                
                // Secure traffic only
                app.all('*', function(req, res, next){
                    console.log('req start: ',req.secure, req.hostname, req.url, app.get('port'));
                  if (req.secure) {
                    return next();
                  };

                 res.redirect('https://'+req.hostname+':'+app.get('secPort')+req.url);
                });
                // view engine setup
                // view engine setup
                app.set('views', path.join(__dirname, 'views'));
                app.set('view engine', 'jade');
                // uncomment after placing your favicon in /public
                //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

                app.use(logger('dev'));
                app.use(bodyParser.json());
                app.use(bodyParser.urlencoded({ extended: false }));
                app.use(cookieParser());
                
                // passport config
                var User = require('./models/user');
                app.use(passport.initialize());
                passport.use(new LocalStrategy(User.authenticate()));
                passport.serializeUser(User.serializeUser());
                passport.deserializeUser(User.deserializeUser());


                app.use('/public', express.static(path.join(__dirname, 'public')));
                
                app.use('/', routes);
                app.use('/users', users);
                app.use('/news',newsRouter);
                app.use('/city',cityRouter);
                app.use('/image',imageRouter);
                app.use('/mayor',mayorRouter);
                app.use('/deputymayor',deputyMayorRouter);
                app.use('/first_theatre',firstTheatreRouter);
                app.use('/second_theatre',secondTheatreRouter);
                app.use('/basillica',basillicaRouter);
                app.use('/bezesteni',bezesteniRouter);
                app.use('/mill',millRouter);
                app.use('/park',parkRouter);
                app.use('/church',churchRouter);
                app.use('/announcements',announcementsRouter);
                app.use('/events',eventsRouter);
                // catch 404 and forward to error handler
                app.use(function(req, res, next) {
                  var err = new Error('Not Found');
                  err.status = 404;
                  next(err);
                });
                // error handlers
                // development error handler
                // will print stacktrace
                if (app.get('env') === 'development') {
                  app.use(function(err, req, res, next) {
                    res.status(err.status || 500);
                    res.json({
                      message: err.message,
                      error: err
                    });
                  });
                }

                // production error handler
                // no stacktraces leaked to user
                app.use(function(err, req, res, next) {
                  res.status(err.status || 500);
                  res.json({
                    message: err.message,
                    error: {}
                  });
                });

                module.exports = app;