import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { Speaker }        from './speaker';
import { SpeakerService } from './speaker.service';

@Component({
    templateUrl: 'app/speaker/speakerdetail.component.html',
    styleUrls: ['app/speaker/speakerdetail.component.css']
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
            this.currentSpeakerId = +params['id'];

            if (this.currentSpeakerId <= 0) {
                this.currentSpeaker = new Speaker();
                this.currentSpeaker.id = this.currentSpeakerId;
                this.saveBtnText = 'Save';
            } else {
                this.saveBtnText = 'Update';
                this.loadSpeaker(this.currentSpeakerId);    
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