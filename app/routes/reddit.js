import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return $.ajax({
      url: 'https://www.reddit.com/r/emberjs.json'
  }).then(function(json) {
    console.log("Fetched data");
    console.log(json.data.children);
    return json.data.children;
  });
}
});
