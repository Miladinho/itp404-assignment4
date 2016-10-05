define('assignment4/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'assignment4/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _assignment4ConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_assignment4ConfigEnvironment['default'].APP.name, _assignment4ConfigEnvironment['default'].APP.version)
  };
});