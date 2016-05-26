"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_1 = require('./app');
platform_browser_dynamic_1.bootstrap(app_1.AppComponent)
    .then(function (success) { return console.log('Bootstrap success'); })
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map