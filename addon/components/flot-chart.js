import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  attributeBindings: ['style'],
  data: [],
  options: {},
  height: '300px',
  plot: null,
  style: function () {
    return "height: " + this.get('height') + ";";
  }.property("height"),
  setupFlotChart: function () {
    var $this = this.$();

    var plot = $this.plot(this.get('data'), this.get('options')).data("plot");
    this.set('plot', plot);
  }.on('didInsertElement', 'didUpdateAttrs')
});
