'use strict';

var React = require('react');
var ContactForm = require('./contactForm');

var AddContactPage = React.createClass({
    getInitialState: function() {
        return {
            contact: {
                id: 1, 
                firstName: 'Johnny', 
                lastName: 'Tsunami',
                phoneNumber: '333-333-3333',
                address: '123 Main street, austin, tx'
            }
        };
    },

    setContactState: function(e) {
        var field = e.target.name;
        var value = e.target.value;
        this.state.contact[field] = value;
        return this.setState({contact: this.state.contact});
    },

    render: function() {
        return (
            <div>
                <h1 className="text-center">Add Contact</h1>
                <ContactForm contact={this.state.contact} onChange={this.setContactState} />
            </div>
        );
    }
});

module.exports = AddContactPage;