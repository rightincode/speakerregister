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
var conference_1 = require('./conference');
var conference_service_1 = require('./conference.service');
var ConferenceDetailComponent = (function () {
    function ConferenceDetailComponent(route, router, conferenceService) {
        this.route = route;
        this.router = router;
        this.conferenceService = conferenceService;
    }
    ConferenceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.currentConferenceId = +params['id'];
            if (_this.currentConferenceId <= 0) {
                _this.currentConference = new conference_1.Conference();
                _this.currentConference.id = _this.currentConferenceId;
                _this.saveBtnText = 'Save';
            }
            else {
                _this.saveBtnText = 'Update';
                _this.loadConference(_this.currentConferenceId);
            }
        });
    };
    ConferenceDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ConferenceDetailComponent.prototype.loadConference = function (currentConferenceId) {
        this.currentConference = this.conferenceService.getConferenceById(currentConferenceId);
    };
    ConferenceDetailComponent.prototype.updateConference = function (currentConference) {
        this.conferenceService.saveConference(currentConference);
        this.gotoConferences();
    };
    ConferenceDetailComponent.prototype.gotoConferences = function () {
        this.router.navigate(['/conferencemanagement']);
    };
    ConferenceDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/conference/conferencedetail.component.html',
            styleUrls: ['app/conference/conferencedetail.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, conference_service_1.ConferenceService])
    ], ConferenceDetailComponent);
    return ConferenceDetailComponent;
}());
exports.ConferenceDetailComponent = ConferenceDetailComponent;
//# sourceMappingURL=conferencedetail.component.js.map