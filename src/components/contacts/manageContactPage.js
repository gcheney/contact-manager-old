'use strict';

var React = require('react');
var Router = require('react-router');
var ContactForm = require('./contactForm');
var ContactActions = require('../../actions/contactActions');
var ContactStore = require('../../stores/contactStore');
var toastr = require('toastr');

var ManageContactPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component) {
            if (component.state.dirty && !confirm('Are you sure? Your data will not be saved')) {
                transition.abort();
            }
        }
    },

    getInitialState: function() {
        return {
            contact: {
                id: '',
                firstName: '', 
                lastName: '',
                phoneNumber: '',
                address: ''
            },
            title: 'Add Contact',
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function() {
        var contactId = this.props.params.id;
        if (contactId) {
            this.setState({
                contact: ContactStore.getContactById(contactId),
                title: 'Edit Contact'
            });
        }
    },

    setContactState: function(evt) {
        this.setState({dirty: true});
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

        if (this.state.contact.id) {
            ContactActions.updateContact(this.state.contact);
            toastr.success('Contact updated.');
        } else {
            ContactActions.createContact(this.state.contact);
            toastr.success('New contact saved.');
        }

        this.setState({dirty: false});
        this.transitionTo('contacts');
    },

    render: function() {
        return (
            <div>
                <ContactForm title={this.state.title}
                    contact={this.state.contact} 
                    onChange={this.setContactState} 
                    onSave={this.saveContact} 
                    errors={this.state.errors}/>
            </div>
        );
    }
});

module.exports = ManageContactPage;