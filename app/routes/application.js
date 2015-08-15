/* global cordova */
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    back() {
      history.back();
    },

    openLink(url) {
      window.open(url, '_system');
    },

    openInAppBrowser(url) {
      let ref = cordova.InAppBrowser.open(url);
      console.log(ref);
    }
  }
});
