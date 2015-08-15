/* global remoteStorage */
export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');

  remoteStorage.access.claim('contacts', 'rw');
  remoteStorage.caching.disable('/');
  remoteStorage.cordovaRedirectUri = 'https://rs-sync.5apps.com';

  remoteStorage.on('connected', function() {
    // alert('Storage connected. Yay!');
    // this.set('waitingForRemoteStorage', false);
  }.bind(this));

  remoteStorage.on('error', function(error) {
    alert(error);
    // this.set('waitingForRemoteStorage', false);
  }.bind(this));

  // if (!remoteStorage.remote.connected && !this.get('waitingForRemoteStorage')) {
  //   this.set('waitingForRemoteStorage', true);
  // }
}

export default {
  name: 'remotestorage',
  initialize: initialize
};
