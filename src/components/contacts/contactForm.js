'use strict';

var React = require('react');
var TextInput = require('../common/textInput')

var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    
    render: function() {
        return (
            <form className="col-md-8 col-md-offset-2">
                <TextInput name="firstName" label="First Name" 
                    value={this.props.contact.firstName} onChange={this.props.onChange} 
                    error={this.props.errors.firstName} />

                <TextInput name="lastName" label="Last Name" 
                    value={this.props.contact.lastName} onChange={this.props.onChange} 
                    error={this.props.errors.firstName} />

                <TextInput name="phoneNumber" label="Phone Number" 
                    value={this.props.contact.phoneNumber} onChange={this.props.onChange} 
                    error={this.props.errors.firstName} />

                <TextInput name="address" label="Home Address" 
                    value={this.props.contact.address} onChange={this.props.onChange} />

                <div className="text-center">
                    <input type="submit" value="Save Contact" className="btn btn-primary" onClick={this.props.onSave}/>
                </div>
            </form>
        );
    }
});

module.exports = ContactForm;
