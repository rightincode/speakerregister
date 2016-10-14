﻿import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { Conference } from './conference';
import { ConferenceService } from './conference.service';

@Component({
    templateUrl: 'app/conference/conferencedetail.component.html',
    styleUrls: ['app/conference/conferencedetail.component.css']
})
export class ConferenceDetailComponent implements OnInit, OnDestroy {

    private sub: any;
    private loadConferenceSub: any;
    private updateConferenceSub: any;

    currentConferenceId: number;
    currentConference: Conference;
    saveBtnText: string;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private conferenceService: ConferenceService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.currentConferenceId = +params['id'];
            this.currentConference = new Conference();

            if (this.currentConferenceId <= 0) {
                this.currentConference.id = this.currentConferenceId;
                this.saveBtnText = 'Save';
            } else {
                this.saveBtnText = 'Update';
                this.loadConference(this.currentConferenceId);
            }
        });
    }

    ngOnDestroy() {

        if (this.sub) {
            this.sub.unsubscribe();    
        }

        if (this.loadConferenceSub) {
            this.loadConferenceSub.unsubscribe();    
        }

        if (this.updateConferenceSub) {
            this.updateConferenceSub.unsubscribe();
        }
    }

    loadConference(currentConferenceId: number) {
        this.loadConferenceSub = this.conferenceService.getConferenceById(currentConferenceId)
                                    .subscribe(conference => { this.currentConference = conference },
                                        error => { /* do nothing for now */ });
    }

    updateConference(currentConference: Conference) {
        this.updateConferenceSub = this.conferenceService.saveConference(currentConference)
                                    .subscribe(Conference => { this.gotoConferences(); },
                                        error => { /* do nothing for now */ });
    }

    gotoConferences() {
        this.router.navigate(['/conferencemanagement']);
    }
}