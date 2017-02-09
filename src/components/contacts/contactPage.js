'use strict';

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var ContactApi = require('../../api/contactApi');
var ContactList = require('./contactList');

var ContactPage = React.createClass({
    getInitialState: function() {
        return {
            contacts: []
        };
    },
    componentDidMount: function() {
        if (this.isMounted()) {
            this.setState({ contacts: ContactApi.getAllContacts() });
        }
    },
    render: function() {
        return (
            <div>
                <h1>Contacts</h1>
                <Link to="addContact" className="btn btn-default">Add Contact</Link>
                <ContactList contacts={this.state.contacts} />
            </div>  
        );
    }
});

module.exports = ContactPage;