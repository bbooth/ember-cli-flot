import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

var App;

moduleForComponent('flot-chart', 'FlotChartComponent', {
  setup: function () {
    App = startApp();
  },
  teardown: function () {
    Ember.run(App, 'destroy');
  }
});

test('is a div tag', function () {
  equal('DIV', this.$().prop('tagName'));
});

test('default plot height', function () {
  equal(this.$().height(), 300);
});

test('default plot data', function () {
  var component = this.subject();
  var actualData = null;

  Ember.run(function () {
    actualData = component.get("data");
  });
  console.log(actualData);

  equal(component.get("data"), []);
});

test('default plot options', function () {
  var component = this.subject();
  equal(component.get("options"), {});
});

test('plot height changes', function () {
  var component = this.subject();

  equal(this.$().height(), 300);

  Ember.run(function () {
    component.set('height', "200px");
  });

  equal(this.$().height(), 200);
});

test('plot height changes', function () {
  var component = this.subject();

  equal(this.$().height(), 300);

  Ember.run(function () {
    component.set('height', "200px");
  });

  equal(this.$().height(), 200);
});
