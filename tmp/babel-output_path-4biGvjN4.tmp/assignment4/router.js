define('assignment4/router', ['exports', 'ember', 'assignment4/config/environment'], function (exports, _ember, _assignment4ConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _assignment4ConfigEnvironment['default'].locationType,
    rootURL: _assignment4ConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('reddit');
  });

  exports['default'] = Router;
});