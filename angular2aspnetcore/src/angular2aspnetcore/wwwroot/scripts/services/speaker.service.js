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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var speaker_1 = require('../models/speaker');
var SpeakerService = (function () {
    function SpeakerService(http) {
        var _this = this;
        this.http = http;
        this.speakersUrl = 'app/testdata/speakers.json'; // URL to web API
        this.loadSpeakers()
            .subscribe(function (speakers) { return _this.speakers = speakers; }, function (error) { return _this.errorMessage = error; });
    }
    SpeakerService.prototype.getSpeakers = function () {
        return this.speakers;
    };
    SpeakerService.prototype.getSpeakerById = function (id) {
        var foundSpeaker = this.speakers.find(function (speaker) { return speaker.id === id; });
        return foundSpeaker ? foundSpeaker : new speaker_1.Speaker();
    };
    SpeakerService.prototype.saveSpeaker = function (currentSpeaker) {
        if (currentSpeaker) {
            if (currentSpeaker.id <= 0) {
                // adding speaker
                currentSpeaker.id = this.speakers.length + 1;
                this.speakers.push(currentSpeaker);
            }
            else {
                // updating speaker
                var speakerIndex = this.speakers.findIndex(function (speaker) { return speaker.id === currentSpeaker.id; });
                if (speakerIndex > 0) {
                    this.speakers[speakerIndex] = currentSpeaker;
                }
            }
        }
    };
    SpeakerService.prototype.loadSpeakers = function () {
        return this.http.get(this.speakersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SpeakerService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    SpeakerService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    SpeakerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SpeakerService);
    return SpeakerService;
}());
exports.SpeakerService = SpeakerService;
//# sourceMappingURL=speaker.service.js.map