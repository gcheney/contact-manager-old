'use strict';

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('../components/app')}>
        <DefaultRoute handler={require('../components/home/homePage')} />
        <Route name="contacts" handler={require('../components/contacts/contactPage')} />
        <Route name="addContact" path="contacts/add" handler={require('../components/contacts/AddContactPage')} />
        <Route name="about" handler={require('../components/about/aboutPage')} />
        <NotFoundRoute handler={require('../components/error/404')} />
        <Redirect from="contact" to="contacts" />
    </Route>
);

module.exports = routes;