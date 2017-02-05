'use strict';

var React = require('react');

var ContactList = React.createClass({
    propTypes: {
        contacts: React.PropTypes.array.isRequired
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
                <table className="table">
                    <thead>
                        <th> </th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </thead>
                    <tbody>
                        {this.props.contacts.map(createContactRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = ContactList;