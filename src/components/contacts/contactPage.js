'use strict';

var React = require('react');
var ContactApi = require('../../api/contactApi');


var Contacts = React.createClass({
    getInitialState: function() {
        return {
            contacts: []
        };
    },
    componentWillMount: function() {
        this.setState({ contacts: ContactApi.getAllContacts() });
    },
    render: function() {
        var createContactRow = function(contact) {
            return (
                <tr key={ contact.id }>
                    <td><a href={"/#contacts/" + contact.id} className="btn btn-default">Edit</a></td>
                    <td>{contact.firstName} {contact.lastName}</td>
                    <td>{contact.phoneNumber}</td>
                    <td>{contact.address.street} {contact.address.city}, {contact.address.state} {contact.address.zipcode}</td>
                </tr>
            );
        };

        return (
            <div>
                <h1>Contacts</h1>

                <table className="table">
                    <thead>
                        <th> </th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </thead>
                    <tbody>
                        {this.state.contacts.map(createContactRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Contacts;