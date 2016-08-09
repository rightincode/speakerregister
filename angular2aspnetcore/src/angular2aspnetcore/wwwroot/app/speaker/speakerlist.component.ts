import { Component, OnInit } from '@angular/core';
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
        this.getSpeakers();
    }

    onSelect(speaker: Speaker) {
        this.router.navigate(['/speakerdetail', speaker.id]);
    }

    getSpeakers() {
        this.speakers = this.speakerService.getSpeakers();
    }

    //addHero(name: string) {
    //    if (!name) { return; }
    //    this.heroService.addHero(name)
    //        .subscribe(
    //        hero => this.heroes.push(hero),
    //        error => this.errorMessage = <any>error);
    //}
}