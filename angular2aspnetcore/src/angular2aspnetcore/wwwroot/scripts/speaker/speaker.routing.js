"use strict";
var router_1 = require('@angular/router');
var speakerlist_component_1 = require('./speakerlist.component');
var speakerdetail_component_1 = require('./speakerdetail.component');
var routes = [
    { path: 'speakerlist', component: speakerlist_component_1.SpeakerListComponent },
    { path: 'speakerdetail/:id', component: speakerdetail_component_1.SpeakerDetailComponent }
];
exports.speakerRouting = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=speaker.routing.js.map