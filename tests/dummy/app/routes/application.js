import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [ { label: "Foo", data: [ [10, 1], [17, -14], [30, 5] ] },
      { label: "Bar", data: [ [11, 13], [19, 11], [30, -7] ] }
    ];
  }
});
