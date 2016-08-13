"use strict";
var router_1 = require('@angular/router');
var speakerregisterhome_component_1 = require('./home/speakerregisterhome.component');
var speakerlist_component_1 = require('./speaker/speakerlist.component');
var speakerdetail_component_1 = require('./speaker/speakerdetail.component');
var pagenotfound_component_1 = require('./pagenotfound.component');
var routes = [
    { path: '', component: speakerregisterhome_component_1.SpeakerRegisterHomeComponent },
    { path: 'home', component: speakerregisterhome_component_1.SpeakerRegisterHomeComponent },
    { path: 'speakerlist', component: speakerlist_component_1.SpeakerListComponent },
    { path: 'speakerdetail/:id', component: speakerdetail_component_1.SpeakerDetailComponent },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
exports.appRouterProviders = [];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map