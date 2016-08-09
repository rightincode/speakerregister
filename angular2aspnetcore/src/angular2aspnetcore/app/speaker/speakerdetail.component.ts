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
    saveBtnText: string;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private speakerService: SpeakerService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let currentSpeakerId = +params['id'];

            if (currentSpeakerId <= 0) {
                this.saveBtnText = 'Save';
            } else {
                this.saveBtnText = 'Update';
                this.loadSpeaker(currentSpeakerId);    
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    loadSpeaker(currentSpeakerId: number) {
        this.currentSpeaker = this.speakerService.getSpeakerById(currentSpeakerId);
    }

    updateSpeaker(currentSpeaker: Speaker) {
        this.speakerService.saveSpeaker(currentSpeaker);
        this.gotoSpeakers();
    }

    gotoSpeakers() {
        this.router.navigate(['/speakerlist']);
    }
}