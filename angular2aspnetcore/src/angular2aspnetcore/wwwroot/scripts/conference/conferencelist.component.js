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
var router_1 = require('@angular/router');
var conference_service_1 = require('./conference.service');
var ConferenceListComponent = (function () {
    function ConferenceListComponent(conferenceService, router) {
        this.conferenceService = conferenceService;
        this.router = router;
    }
    ConferenceListComponent.prototype.ngOnInit = function () {
        this.onGetConferences();
    };
    ConferenceListComponent.prototype.onSelect = function (conference) {
        //this.router.navigate(['/speakerdetail', speaker.id]);
    };
    ConferenceListComponent.prototype.onGetConferences = function () {
        this.conferences = this.conferenceService.getConferences();
    };
    ConferenceListComponent.prototype.onAddConference = function () {
        //this.router.navigate(['/speakerdetail', 0]);
    };
    ConferenceListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/conference/conferencelist.component.html'
        }), 
        __metadata('design:paramtypes', [conference_service_1.ConferenceService, router_1.Router])
    ], ConferenceListComponent);
    return ConferenceListComponent;
}());
exports.ConferenceListComponent = ConferenceListComponent;
//# sourceMappingURL=conferencelist.component.js.map