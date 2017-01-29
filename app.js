'use strict';

var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
} else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
}

//app setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));

// send react app to client
app.use(function(req, res){
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


// *********** ERROR HANDLERS ********************** //

// development error handler
// will print stacktrace
if (process.env.NODE_ENV === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// *********** LISTEN ********************** //

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(req, res) {
    console.log('App server is listening on port ' + PORT); 
    if (process.env.NODE_ENV === 'development') {
        console.log('http://localhost:' + PORT);
    }
});

module.exports = app;