'use strict';

var React = require('react');

var ContactForm = React.createClass({

    render: function() {
        return (
            <form className="col-md-8 col-md-offset-2">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" className="form-control" placeholder="First Name" ref="firstName" value="" />
                <br />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" className="form-control" placeholder="Last Name" ref="lastName" value="" />
                <br />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" name="phoneNumber" className="form-control" placeholder="Phone Number" ref="phoneNumber" value="" />
                <br />

                <label htmlFor="streetAddress">Street Address</label>
                <input type="text" name="streetAddress" className="form-control" placeholder="Street Address" ref="streetAddress" value="" />   
                <br />

                <div className="text-center">
                    <input type="submit" value="Save Contact" className="btn btn-primary" />
                </div>
            </form>
        );
    }
});

module.exports = ContactForm;
