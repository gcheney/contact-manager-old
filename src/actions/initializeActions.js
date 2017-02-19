'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var ContactApi = require('../api/contactApi');

var InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                contacts: ContactApi.getAllContacts()
            }
        });
    }
};

module.exports = InitializeActions;