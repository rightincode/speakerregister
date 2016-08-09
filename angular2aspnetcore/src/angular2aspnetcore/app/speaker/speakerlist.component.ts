﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Speaker } from '../models/speaker';
import { SpeakerService } from '../services/speaker.service';

@Component({
    templateUrl: '../../app/speaker/speakerlist.component.html'
})

export class SpeakerListComponent implements OnInit {

    errorMessage: string;
    speakers: Speaker[];

    constructor(private speakerService: SpeakerService,
                private router: Router) {
    }
    
    ngOnInit() {
        this.onGetSpeakers();
    }

    onSelect(speaker: Speaker) {
        this.router.navigate(['/speakerdetail', speaker.id]);
    }

    onGetSpeakers() {
        this.speakers = this.speakerService.getSpeakers();
    }

    onAddSpeaker() {
        this.router.navigate(['/speakerdetail', 0]);
    }
}