'use strict';

var Dispacther = require('../dispatcher/appDispatcher');
var ContactApi = require('../api/contactApi');
var ActionTypes = require('../constants/actionTypes');

var ContactActions = {
    createContact: function(contact) {
        var newContact = ContactApi.saveContact(contact);

        Dispacther.dispatch({
            actionType: ActionTypes.CREATE_CONTACT,
            contact: newContact
        });
    },

    updateContact: function(contact) {
        var updatedContact = ContactApi.saveContact(contact);

        Dispacther.dispatch({
            actionType: ActionTypes.UPDATE_CONTACT,
            contact: updatedContact
        });
    }
};

module.exports = ContactActions;