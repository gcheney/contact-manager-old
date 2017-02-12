'use strict';

var React = require('react');
var Router = require('react-router');
var ContactForm = require('./contactForm');
var ContactApi = require('../../api/contactApi');
var toastr = require('toastr');

var AddContactPage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    getInitialState: function() {
        return {
            contact: {
                id: '',
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
        toastr.success('New contact saved.');
        this.transitionTo('contacts');
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