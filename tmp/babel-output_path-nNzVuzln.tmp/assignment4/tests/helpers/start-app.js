define('assignment4/tests/helpers/start-app', ['exports', 'ember', 'assignment4/app', 'assignment4/config/environment'], function (exports, _ember, _assignment4App, _assignment4ConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _assignment4ConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _assignment4App['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});