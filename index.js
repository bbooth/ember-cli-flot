/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-jquery-flot',
  included: function (app) {
    this.app = app;
    var configMessage = [];
    var fs = require("fs"), path = require('path');
    var o = app.options['ember-cli-flot'] || {
        plugins: true
      };
    var flotPath = 'bower_components/flot/';
    var modulePath = path.relative(app.project.root, __dirname);
    var path_join = function () {
      // fix path with windows back slash with path_join
      return path.join.apply(this, arguments).replace(/\\/g, '/');
    };

    var emberCLIVersion = app.project.emberCLIVersion().split(',').map(function (item) {
      return Number(item);
    });
    if (emberCLIVersion[1] === 0 || emberCLIVersion[2] < 8) {
      throw new Error('ember-cli-flot requires ember-cli version 0.1.8 or greater.\n');
    }

    app.import(path_join(flotPath, 'jquery.flot.js'));

    // Import JS from flot
    if (o.plugins instanceof Array) {
      o.plugins.forEach(function (fileName) {
        app.import(flotPath + 'jquery.flot.' + fileName + '.js');
      });
      configMessage.push('some plugins loaded [' + o.plugins.join(',') + ']');
    } else if (o.js !== false) {
      fs.readdir(flotPath, function (err, files) {
        if (err) {
          throw err;
        }

        files.filter(function (file) {
          return fs.statSync(file).isFile();
        }).filter(function (file) {
          return file !== "jquery.flot.js" && file.startsWith("jquery.flot.")
        }).forEach(function (file) {
          app.import(path_join(flotPath, file));
        })
      });

      configMessage.push('all plugins enabled');
    } else {
      configMessage.push('no plugins enabled');
    }

    if (o.quiet !== false) {
      console.log('flot config: ', configMessage.join(', '));
    }
  }
};
