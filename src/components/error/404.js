'use strict';

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function() {
        return(
            <div className="jumbotron">
                <div className="text-center">
                    <h1>404 - Page Not Found</h1>
                    <p>Sorry, the requested page could not be found</p>
                    <p><Link to="app">Home</Link></p>
                </div>
            </div>
        );
    }
});

module.exports = NotFoundPage;