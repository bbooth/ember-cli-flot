import { find } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

var App;

module('FlotChartComponent', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.setup = function () {
      App = startApp();
    };

    this.teardown = function () {
      Ember.run(App, 'destroy');
    };
  });

  test('is a div tag', function () {
    equal('DIV', find('*').tagName);
  });

  test('default plot height', function () {
    equal(this.$().height(), 300);
  });

  test('plot height changes', function () {
    var component = this.owner.factoryFor('component:flot-chart').create();

    equal(this.$().height(), 300);

    Ember.run(function () {
      component.set('height', "200px");
    });

    equal(this.$().height(), 200);
  });

  test('plot height changes', function () {
    var component = this.owner.factoryFor('component:flot-chart').create();

    equal(this.$().height(), 300);

    Ember.run(function () {
      component.set('height', "200px");
    });

    equal(this.$().height(), 200);
  });
});
