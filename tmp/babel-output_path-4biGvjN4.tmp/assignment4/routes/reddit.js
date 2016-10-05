define('assignment4/routes/reddit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return $.ajax({
        url: 'https://www.reddit.com/r/emberjs.json'
      }).then(function (json) {
        console.log(json.data.children);
        return json.data.children;
      });
    }
  });
});