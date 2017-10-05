import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { Speaker }        from './speaker';
import { SpeakerService } from './speaker.service';

@Component({
    templateUrl: 'app/speaker/speakerdetail.component.html',
    styleUrls: ['app/speaker/speakerdetail.component.css']
})

export class SpeakerDetailComponent implements OnInit, OnDestroy {

    private sub: any;
    private loadSpeakerSub: any;
    private saveSpeakerSub: any;

    currentSpeakerId: number;
    currentSpeaker: Speaker;
    saveBtnText: string;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private speakerService: SpeakerService) {
    }

    ngOnInit() {
        this.sub = this.route.paramMap.subscribe(params => {
            this.currentSpeakerId = parseInt(params.get('id')) ? parseInt(params.get('id')) : 0;
            this.currentSpeaker = new Speaker();

            if (this.currentSpeakerId <= 0) {
                this.currentSpeaker.id = this.currentSpeakerId;
                this.saveBtnText = 'Save';
            } else {
                this.saveBtnText = 'Update';
                this.loadSpeaker(this.currentSpeakerId);
            }
        });

        //use if there is no change the id parameter will change while the componenet is loaded

        //let param = this.route.snapshot.paramMap.get('id');

        //this.currentSpeakerId = parseInt(param) ? parseInt(param) : 0;
        //this.currentSpeaker = new Speaker();

        //if (this.currentSpeakerId <= 0) {
        //    this.currentSpeaker.id = this.currentSpeakerId;
        //    this.saveBtnText = 'Save';
        //} else {
        //    this.saveBtnText = 'Update';
        //    this.loadSpeaker(this.currentSpeakerId);
        //}
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();    
        }
        if (this.loadSpeakerSub) {
            this.loadSpeakerSub.unsubscribe();    
        }
        if (this.saveSpeakerSub) {
            this.saveSpeakerSub.unsubscribe();    
        }
    }

    loadSpeaker(currentSpeakerId: number) {
        this.loadSpeakerSub = this.speakerService.getSpeakerById(currentSpeakerId)
            .subscribe(speaker => { this.currentSpeaker = speaker; },
            (error) => { /* do nothing for now */});
    }

    updateSpeaker(currentSpeaker: Speaker) {
        this.saveSpeakerSub = this.speakerService.saveSpeaker(currentSpeaker)
            .subscribe(speaker => {
                this.currentSpeaker = speaker;
                this.gotoSpeakers();
            },
            (error) => { /* do nothing for now */});
    }

    gotoSpeakers() {
        this.router.navigate(['/speakerlist', { id: this.currentSpeakerId }]);
        //this.router.navigate(['../../speakerlist', { id: this.currentSpeakerId }], { relativeTo: this.route });
    }
}