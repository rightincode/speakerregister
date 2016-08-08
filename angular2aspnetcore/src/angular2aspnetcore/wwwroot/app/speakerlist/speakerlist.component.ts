import { Component, OnInit } from '@angular/core';
import { Speaker } from '../models/speaker';
import { SpeakerService } from '../services/speaker.service';

@Component({
    template: '<h3>Speaker List Page </h3>'
})

export class SpeakerListComponent implements OnInit {

    errorMessage: string;
    speakers: Speaker[];

    constructor(private speakerService: SpeakerService) {
    }
    
    ngOnInit() {
        this.getSpeakers();
    }

    getSpeakers() {
        this.speakerService.getSpeakers()
            .subscribe(
            speakers => this.speakers = speakers,
            error => this.errorMessage = <any>error);
    }

    //addHero(name: string) {
    //    if (!name) { return; }
    //    this.heroService.addHero(name)
    //        .subscribe(
    //        hero => this.heroes.push(hero),
    //        error => this.errorMessage = <any>error);
    //}
}