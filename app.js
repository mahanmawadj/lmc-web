var debug = require('debug')('lmcweb');
/**
 * Module dependencies.
 */

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('error-handler');
var logger = require('morgan');
var path = require('path');
var favicon = require('serve-favicon');

var cookieParser = require('cookie-parser');

var routes = require('./routes');
//var routes = require('./routes/index');
//var events = require('./routes/events');
//var contact = require('./routes/contact');
//var results = require('./routes/results');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/events', events);
//app.use('/contact', contact);
//app.use('/results', results);


// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
// app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

app.set('port', process.env.PORT || 80);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port: ' + server.address().port);
});








