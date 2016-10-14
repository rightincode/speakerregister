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
        this.router.navigate(['/conferencemanagement', conference.id]);
    }

    onGetConferences() {
        this.conferenceService.getConferences()
            .subscribe(conferences => { this.conferences = conferences },
                error => { this.errorMessage = error} );
    }

    onAddConference() {
        this.router.navigate(['/conferencemanagement', 0]);
    }
}