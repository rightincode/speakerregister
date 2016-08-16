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
var conference_1 = require('./conference');
var ConferenceService = (function () {
    function ConferenceService(http) {
        var _this = this;
        this.http = http;
        this.conferencesUrl = 'app/testdata/conferences.json'; // url to web API
        this.loadConferences()
            .subscribe(function (conferences) { return _this.conferences = conferences; }, function (error) { return _this.errorMessage = error; });
    }
    ConferenceService.prototype.getConferences = function () {
        return this.conferences;
    };
    ConferenceService.prototype.getConferenceById = function (id) {
        var foundConference = this.conferences.find(function (conference) { return conference.id === id; });
        return foundConference ? foundConference : new conference_1.Conference();
    };
    ConferenceService.prototype.saveConference = function (currentConference) {
        if (currentConference) {
            if (currentConference.id <= 0) {
                // adding conference
                currentConference.id = this.conferences.length + 1;
                this.conferences.push(currentConference);
            }
            else {
                // updating conference
                var conferenceIndex = this.conferences.findIndex(function (conference) { return conference.id === currentConference.id; });
                if (conferenceIndex > 0) {
                    this.conferences[conferenceIndex] = currentConference;
                }
            }
        }
    };
    ConferenceService.prototype.loadConferences = function () {
        return this.http.get(this.conferencesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ConferenceService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ConferenceService.prototype.handleError = function (error) {
        // in a real world app, we might use a remote logging infrastructure
        // we'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ConferenceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ConferenceService);
    return ConferenceService;
}());
exports.ConferenceService = ConferenceService;
//# sourceMappingURL=conference.service.js.map