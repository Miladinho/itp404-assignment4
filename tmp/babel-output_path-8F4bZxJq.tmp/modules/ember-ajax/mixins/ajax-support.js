import Ember from 'ember';

var Mixin = Ember.Mixin;
var service = Ember.inject.service;
var alias = Ember.computed.alias;

export default Mixin.create({

  /**
   * The AJAX service to send requests through
   *
   * @property {AjaxService} ajaxService
   * @public
   */
  ajaxService: service('ajax'),

  /**
   * @property {string} host
   * @public
   */
  host: alias('ajaxService.host'),

  /**
   * @property {string} namespace
   * @public
   */
  namespace: alias('ajaxService.namespace'),

  /**
   * @property {object} headers
   * @public
   */
  headers: alias('ajaxService.headers'),

  ajax: function ajax(url, type, options) {
    options = this.ajaxOptions.apply(this, arguments);
    return this.get('ajaxService').request(url, options);
  },

  ajaxOptions: function ajaxOptions(url, type) {
    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    options.type = type;
    return this.get('ajaxService').options(url, options);
  }
});