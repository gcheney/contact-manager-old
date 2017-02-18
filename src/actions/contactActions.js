'use strict';

var Dispacther = require('../dispatcher/appDispatcher');
var ContactApi = require('../api/contactApi');
var ActionTypes = require('../contacts/actionTypes');

var ContactActions = {
    createContact: function(contact) {
        var newContact = ContactApi.saveContact(contact);

        Dispacther.dispatch({
            actionType: ActionTypes.CREATE_CONTACT,
            contact: newContact
        });
    }
};

module.exports = ContactActions;