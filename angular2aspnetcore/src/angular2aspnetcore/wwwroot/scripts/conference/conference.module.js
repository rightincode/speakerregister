"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var conference_component_1 = require('./conference.component');
var conferencelist_component_1 = require('./conferencelist.component');
var conferencedetail_component_1 = require('./conferencedetail.component');
var conference_service_1 = require('./conference.service');
var conference_routing_1 = require('./conference.routing');
var ConferenceModule = (function () {
    function ConferenceModule(conferenceService) {
        this.conferenceService = conferenceService;
    }
    ConferenceModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, conference_routing_1.conferenceRouting],
            declarations: [conference_component_1.ConferenceComponent, conferencelist_component_1.ConferenceListComponent, conferencedetail_component_1.ConferenceDetailComponent],
            providers: [conference_service_1.ConferenceService],
            exports: [conference_component_1.ConferenceComponent, conferencelist_component_1.ConferenceListComponent, conferencedetail_component_1.ConferenceDetailComponent]
        }), 
        __metadata('design:paramtypes', [conference_service_1.ConferenceService])
    ], ConferenceModule);
    return ConferenceModule;
}());
exports.ConferenceModule = ConferenceModule;
//# sourceMappingURL=conference.module.js.map