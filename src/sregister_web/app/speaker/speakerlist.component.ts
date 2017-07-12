import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Speaker } from './speaker';
import { SpeakerService } from './speaker.service';

@Component({
    templateUrl: '../../app/speaker/speakerlist.component.html'
})

export class SpeakerListComponent implements OnInit, OnDestroy {

    private speakerServiceSub: any;
    private selectedSpeakerId: number;

    errorMessage: string;
    speakers: Speaker[];

    constructor(private speakerService: SpeakerService,
        private router: Router,
        private route: ActivatedRoute) {
    }
    
    ngOnInit() {

        let speakerIdParam = this.route.snapshot.paramMap.get('id');
        this.selectedSpeakerId = parseInt(speakerIdParam) ? parseInt(speakerIdParam) : 0;
        this.onGetSpeakers();

    }

    ngOnDestroy() {
        if (this.speakerServiceSub) {
            this.speakerServiceSub.unsubscribe();    
        }
    }

    onSelect(speaker: Speaker) {
        this.router.navigate(['/speakerdetail', speaker.id]);
    }

    onGetSpeakers() {
        this.speakerServiceSub = this.speakerService.getSpeakers()
            .subscribe(speakers => { this.speakers = speakers; },
                error => { this.errorMessage = error; });
    };

    onAddSpeaker() {
        this.router.navigate(['/speakerdetail', 0]);
    }

    isSelected(speaker: Speaker) {
        return speaker.id === this.selectedSpeakerId;
    }
}