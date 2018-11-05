import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Conference } from './conference';
import { ConferenceService } from './conference.service';

@Component({
    //templateUrl: 'app/conference/conferencelist.component.html'
    templateUrl: 'conferencelist.component.html'
})

export class ConferenceListComponent implements OnInit {

    private selectedConferenceId: number;

    errorMessage: string;
    conferences: Conference[];

    constructor(private conferenceService: ConferenceService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {

        let conferenceIdParam = this.route.snapshot.paramMap.get('id');
        this.selectedConferenceId = parseInt(conferenceIdParam) ? parseInt(conferenceIdParam) : 0;
        this.onGetConferences();
    }

    onSelect(conference: Conference) {
        this.router.navigate([conference.id], { relativeTo: this.route });
    }

    onGetConferences() {
        this.conferenceService.getConferences()
            .subscribe(conferences => { this.conferences = conferences },
                error => { this.errorMessage = error} );
    }

    onAddConference() {
        this.router.navigate([0], { relativeTo: this.route });
    }

    isSelected(conference: Conference) {
        return conference.id === this.selectedConferenceId;
    }
}
