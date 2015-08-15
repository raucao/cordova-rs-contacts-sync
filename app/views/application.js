/* global remoteStorage */
import Ember from 'ember';

export default Ember.View.extend({

  displayRsWidget: function() {
    remoteStorage.displayWidget('remotestorage-connect');
  }.on('didInsertElement')

});
