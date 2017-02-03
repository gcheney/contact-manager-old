'use strict';

//This file is mocking a web API by hitting hard coded data.
var contacts = require('./contactData').contacts;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(contact) {
	return Math.floor(Math.random() * 20);
};

var _clone = function(item) {
    //return cloned copy so that the item is passed by value instead of by reference
	return JSON.parse(JSON.stringify(item)); 
};

var ContactApi = {
	getAllContacts: function() {
		return _clone(contacts); 
	},

	getContactById: function(id) {
		var contact = _.find(contacts, {id: id});
		return _clone(contact);
	},
	
	saveContact: function(contact) {
		if (contact.id) {
			var existingContactIndex = _.indexOf(contacts, _.find(contacts, {id: contact.id})); 
			contacts.splice(existingContactIndex, 1, contact);
		} else {
			contact.id = _generateId(contact);
			contacts.push(contact);
		}

		return _clone(contact);
	},

	deleteContact: function(id) {
		_.remove(contacts, { id: id});
	}
};

module.exports = ContactApi;