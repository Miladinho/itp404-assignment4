define('assignment4/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'assignment4/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _assignment4ConfigEnvironment) {

  var name = _assignment4ConfigEnvironment['default'].APP.name;
  var version = _assignment4ConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});