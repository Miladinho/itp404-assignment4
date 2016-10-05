define('assignment4/tests/helpers/resolver', ['exports', 'assignment4/resolver', 'assignment4/config/environment'], function (exports, _assignment4Resolver, _assignment4ConfigEnvironment) {

  var resolver = _assignment4Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: _assignment4ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _assignment4ConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});