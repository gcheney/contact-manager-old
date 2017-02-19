'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./routes/routes');
var InitializeActions = require('./actins/InitializeActions');

InitializeActions.initApp();

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});

