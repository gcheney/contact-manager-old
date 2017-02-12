'use strict';

var React = require('react');
var ContactForm = require('./contactForm');
var ContactApi = require('../../api/contactApi');

var AddContactPage = React.createClass({
    getInitialState: function() {
        return {
            contact: {
                firstName: '', 
                lastName: '',
                phoneNumber: '',
                address: ''
            }
        };
    },
    setContactState: function(evt) {
        var field = evt.target.name;
        var value = evt.target.value;
        this.state.contact[field] = value;
        return this.setState({contact: this.state.contact});
    },
    saveContact: function(evt) {
        evt.preventDefault();
        ContactApi.saveContact(this.state.contact);
    },
    render: function() {
        return (
            <div>
                <h1 className="text-center">Add Contact</h1>
                <ContactForm contact={this.state.contact} 
                    onChange={this.setContactState} 
                    onSave={this.saveContact} />
            </div>
        );
    }
});

module.exports = AddContactPage;