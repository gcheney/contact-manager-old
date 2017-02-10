'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-inverse" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="app" className="navbar-brand">Contact Manager</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="about">About</Link></li>
                        <li><Link to="contacts">Contacts</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;