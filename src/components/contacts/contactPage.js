'use strict';

var React = require('react');
var ContactApi = require('../../api/contactApi');
var ContactList = require('./contactList');

var Contacts = React.createClass({
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
                <ContactList contacts={this.state.contacts} />
            </div>  
        );
    }
});

module.exports = Contacts;