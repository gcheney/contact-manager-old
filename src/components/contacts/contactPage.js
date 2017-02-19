'use strict';

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var ContactActions = require('../../actions/contactActions');
var ContactStore = require('../../stores/contactStore');
var ContactList = require('./contactList');

var ContactPage = React.createClass({
    getInitialState: function() {
        return {
            contacts: ContactStore.getAllContacts()
        };
    },
    render: function() {
        return (
            <div>
                <h1>Contacts</h1>
                <Link to="addContact" className="btn btn-primary">Add Contact</Link>
                <ContactList contacts={this.state.contacts} />
            </div>  
        );
    }
});

module.exports = ContactPage;