'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function() {
        return (
          <div className="jumbotron">
            <h1>Contact Manager</h1>
            <p>Manage your contacts all in one place</p>
            <Link to="contacts" className="btn btn-primary btn-lg text-center">Get Started</Link>
          </div>  
        );
    }
});

module.exports = Home;