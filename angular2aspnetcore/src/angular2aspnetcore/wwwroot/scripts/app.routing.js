"use strict";
var router_1 = require('@angular/router');
var speakerregisterhome_component_1 = require('./home/speakerregisterhome.component');
var pagenotfound_component_1 = require('./pagenotfound.component');
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: speakerregisterhome_component_1.SpeakerRegisterHomeComponent },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
exports.appRouterProviders = [];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map