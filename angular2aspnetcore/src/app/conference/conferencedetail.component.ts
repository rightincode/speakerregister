import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { Conference } from './conference';
import { ConferenceService } from './conference.service';

@Component({
    templateUrl: 'app/conference/conferencedetail.component.html',
    styleUrls: ['app/conference/conferencedetail.component.css']
})
export class ConferenceDetailComponent implements OnInit, OnDestroy {

    private sub: any;

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

            if (this.currentConferenceId <= 0) {
                this.currentConference = new Conference();
                this.currentConference.id = this.currentConferenceId;
                this.saveBtnText = 'Save';
            } else {
                this.saveBtnText = 'Update';
                this.loadConference(this.currentConferenceId);
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    loadConference(currentConferenceId: number) {
        this.currentConference = this.conferenceService.getConferenceById(currentConferenceId);
    }

    updateConference(currentConference: Conference) {
        this.conferenceService.saveConference(currentConference);
        this.gotoConferences();
    }

    gotoConferences() {
        this.router.navigate(['/conferencemanagement']);
    }
}