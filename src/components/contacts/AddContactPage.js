'use strict';

var React = require('react');
var ContactForm = require('./contactForm');

var AddContactPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="text-center">Add Contact</h1>
                <ContactForm />
            </div>
        );
    }
});

module.exports = AddContactPage;