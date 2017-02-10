'use strict';

var React = require('react');
var TextInput = require('../common/textInput')

var ContactForm = React.createClass({

    render: function() {
        return (
            <form className="col-md-8 col-md-offset-2">
                <TextInput name="firstName" label="firstName" 
                    value={this.props.contact.firstName} onChange={this.props.onChange} />

                <TextInput name="lastName" label="lastName" 
                    value={this.props.contact.lastName} onChange={this.props.onChange} />

                <TextInput name="phoneNumber" label="phoneNumber" 
                    value={this.props.contact.phoneNumber} onChange={this.props.onChange} />

                <TextInput name="address" label="address" 
                    value={this.props.contact.address} onChange={this.props.onChange} />

                <div className="text-center">
                    <input type="submit" value="Save Contact" className="btn btn-primary" />
                </div>
            </form>
        );
    }
});

module.exports = ContactForm;
