define('assignment4/app', ['exports', 'ember', 'assignment4/resolver', 'ember-load-initializers', 'assignment4/config/environment'], function (exports, _ember, _assignment4Resolver, _emberLoadInitializers, _assignment4ConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _assignment4ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _assignment4ConfigEnvironment['default'].podModulePrefix,
    Resolver: _assignment4Resolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _assignment4ConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});