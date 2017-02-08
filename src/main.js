var React = require('react');
var Router = require('react-router');
var routes = require('./routes/routes');

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});

