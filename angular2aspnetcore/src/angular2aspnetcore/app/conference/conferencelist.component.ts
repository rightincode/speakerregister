import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Conference } from './conference';
import { ConferenceService } from './conference.service';

@Component({
    templateUrl: 'app/conference/conferencelist.component.html'
})

export class ConferenceListComponent implements OnInit {

    errorMessage: string;
    conferences: Conference[];

    constructor(private conferenceService: ConferenceService,
        private router: Router) {
    }

    ngOnInit() {
        this.onGetConferences();
    }

    onSelect(conference: Conference) {
        //this.router.navigate(['/speakerdetail', speaker.id]);
    }

    onGetConferences() {
        this.conferences = this.conferenceService.getConferences();
    }

    onAddConference() {
        //this.router.navigate(['/speakerdetail', 0]);
    }
}