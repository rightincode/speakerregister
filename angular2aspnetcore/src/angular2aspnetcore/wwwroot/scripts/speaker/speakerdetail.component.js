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
var speaker_1 = require('./speaker');
var speaker_service_1 = require('./speaker.service');
var SpeakerDetailComponent = (function () {
    function SpeakerDetailComponent(route, router, speakerService) {
        this.route = route;
        this.router = router;
        this.speakerService = speakerService;
    }
    SpeakerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.currentSpeakerId = +params['id'];
            if (_this.currentSpeakerId <= 0) {
                _this.currentSpeaker = new speaker_1.Speaker();
                _this.currentSpeaker.id = _this.currentSpeakerId;
                _this.saveBtnText = 'Save';
            }
            else {
                _this.saveBtnText = 'Update';
                _this.loadSpeaker(_this.currentSpeakerId);
            }
        });
    };
    SpeakerDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    SpeakerDetailComponent.prototype.loadSpeaker = function (currentSpeakerId) {
        this.currentSpeaker = this.speakerService.getSpeakerById(currentSpeakerId);
    };
    SpeakerDetailComponent.prototype.updateSpeaker = function (currentSpeaker) {
        this.speakerService.saveSpeaker(currentSpeaker);
        this.gotoSpeakers();
    };
    SpeakerDetailComponent.prototype.gotoSpeakers = function () {
        this.router.navigate(['/speakerlist']);
    };
    SpeakerDetailComponent = __decorate([
        core_1.Component({
            templateUrl: '../../app/speaker/speakerdetail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, speaker_service_1.SpeakerService])
    ], SpeakerDetailComponent);
    return SpeakerDetailComponent;
}());
exports.SpeakerDetailComponent = SpeakerDetailComponent;
//# sourceMappingURL=speakerdetail.component.js.map