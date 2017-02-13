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
            },
            errors: {}
        };
    },
    setContactState: function(evt) {
        var field = evt.target.name;
        var value = evt.target.value;
        this.state.contact[field] = value;
        return this.setState({contact: this.state.contact});
    },
    contactFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {}; // clear previous errors

        if (this.state.contact.firstName.length === 0) {
            this.state.errors.firstName = 'Please include a first name';
            formIsValid = false;
        }

        if (this.state.contact.lastName.length === 0) {
            this.state.errors.lastName = 'Please include a last name';
            formIsValid = false;
        }

        if (this.state.contact.phoneNumber.length === 0) {
            this.state.errors.phoneNumber = 'Please include a phone number';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },
    saveContact: function(evt) {
        evt.preventDefault();

        if (!this.contactFormIsValid()) {
            return;
        }

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
                    onSave={this.saveContact} 
                    errors={this.state.errors}/>
            </div>
        );
    }
});

module.exports = AddContactPage;