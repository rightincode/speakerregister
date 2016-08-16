import { NgModule }     from '@angular/core';
import { CommonModule}  from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { ConferenceComponent } from './conference.component';
import { ConferenceListComponent } from './conferencelist.component';
//import { SpeakerDetailComponent } from './speakerdetail.component';
import { ConferenceService } from './conference.service';

import { conferenceRouting } from './conference.routing';

@NgModule({
    imports: [CommonModule, FormsModule, conferenceRouting],
    declarations: [ConferenceComponent, ConferenceListComponent],
    providers: [ConferenceService],
    exports: [ConferenceComponent, ConferenceListComponent]
})
export class ConferenceModule {

    constructor(private conferenceService: ConferenceService) {
    }
}