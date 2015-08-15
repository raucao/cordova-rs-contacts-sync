/* global ContactFindOptions */
import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    catchAllErrors: function() {
      window.onerror = function myErrorHandler(error) {
        alert("Error occured: " + error);//or any message
        return false;
      };
    }.on('init'),

    listContacts() {
      if (navigator.contacts) {
        let contacts = [];
        let options = new ContactFindOptions();
        options.filter = "";
        options.multiple = "";
        let filter = ["displayName", "addresses"];

        let onSuccess = (deviceContacts) => {
          contacts = deviceContacts.filter(i => !!i.displayName && i.displayName !== '')
                                   .sort((a, b) => b.displayName < a.displayName);
          this.set('model.contacts', contacts);
        };
        let onError = function(contactError) {
          alert(contactError);
        };

        navigator.contacts.find(filter, onSuccess, onError, options);
      } else {
        let contacts = [
          {displayName: 'Speedboat'},
          {displayName: 'B5'},
          {displayName: 'JC Beats'}
        ];
        this.set('model.contacts', contacts.sort((a, b) => b.displayName < a.displayName));
      }
    }

  }

});
