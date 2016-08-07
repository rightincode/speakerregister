"use strict";
var router_1 = require('@angular/router');
var speakerregisterhome_component_1 = require('./home/speakerregisterhome.component');
var speakerlist_component_1 = require('./speakerlist/speakerlist.component');
var pagenotfound_component_1 = require('./pagenotfound.component');
var routes = [
    { path: 'home', component: speakerregisterhome_component_1.SpeakerRegisterHomeComponent },
    { path: 'speaker-list', component: speakerlist_component_1.SpeakerListComponent },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map