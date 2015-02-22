# ember-cli-flot

ember-cli-flot is an ember-cli addon for using flot charts.  There are a couple companion addons as well like ember-cli-flot-spline and ember-cli-flot-tooltip

## Default Flot Plugins
* canvas
* categories
* crosshairs
* errorbars
* fillbetween
* image
* navigate
* pie
* resize
* selection
* stack
* symbol
* threshold
* time

## Installation

* `ember install:addon ember-cli-flot`

## Configuration

Brocfile.js
```javascript
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  'ember-cli-flot': {
    plugins: ['resize', 'pie', 'time', 'categories']
  }
});
```

Just add the plugin names you want loaded in the ember-cli-flot object.  The only javascript file added by default is jquery.flot.js

Additional plugins can be added via companion ember-cli addons like ember-cli-flot-spline.  Just install them `ember install:addon ember-cli-flot-spline`.  Once installed there is no need to specify the plugin in the plugins configuration array.

## Usage

* `{{ flot-chart height="250px" data=data options=options }}`
* _data_ and _options_ are the standard objects flot expects.  See [https://github.com/flot/flot/blob/master/API.md]
* _height_ is optional but flot requires height to be set either directly like in the component as shown or via css.  

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
