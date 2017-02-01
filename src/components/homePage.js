'use strict';

var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
          <div className="jumbotron">
            <h1>Contact Manager</h1>
            <p>Manage your contacts all in one place</p>
          </div>  
        );
    }
});

module.exports = Home;