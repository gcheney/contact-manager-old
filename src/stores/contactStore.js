'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var contacts = [];

var ContactStore = assign({}, EventEmitter.prototype, {

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getAllContacts: function() {
        return contacts;
    },

    getContactById: function() {
        return _.find(contacts, {id: id});
    }
});

Dispatcher.register(function(action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            contacts = action.initialData.contacts;
            ContactStore.emitChange();
            break;
        case ActionTypes.CREATE_CONTACT:
            contacts.push(action.contact);
            ContactStore.emitChange();
            break;
        case ActionTypes.UPDATE_CONTACT:
            updateContact(action.contact);
            ContactStore.emitChange();
            break;
        default: 
            // no action
    }
});

function updateContact(contact) {
    var contactToUpdate = _.find(contacts, {id: contact.id}); 
    var contactIndex = _.indexOf(contacts, contactToUpdate);
    contacts.splice(contactIndex, 1, contact);
}

module.exports = ContactStore;