import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { Speaker }        from '../models/speaker';
import { SpeakerService } from '../services/speaker.service';

@Component({
    templateUrl: '../../app/speaker/speakerdetail.component.html'
})

export class SpeakerDetailComponent implements OnInit, OnDestroy {

    private sub: any;

    currentSpeakerId: number;
    currentSpeaker: Speaker;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private speakerService: SpeakerService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let currentSpeakerId = +params['id'];
            this.loadSpeaker(currentSpeakerId);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    loadSpeaker(currentSpeakerId: number) {
        this.currentSpeaker = this.speakerService.getSpeakerById(currentSpeakerId);
    }

    gotoSpeakers() {
        this.router.navigate(['/speakerlist']);
    }
}