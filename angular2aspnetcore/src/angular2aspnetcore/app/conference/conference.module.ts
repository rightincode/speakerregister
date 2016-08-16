import { NgModule }     from '@angular/core';
import { CommonModule}  from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { ConferenceComponent } from './conference.component';
import { ConferenceListComponent } from './conferencelist.component';
import { ConferenceDetailComponent } from './conferencedetail.component';
import { ConferenceService } from './conference.service';

import { conferenceRouting } from './conference.routing';

@NgModule({
    imports: [CommonModule, FormsModule, conferenceRouting],
    declarations: [ConferenceComponent, ConferenceListComponent, ConferenceDetailComponent],
    providers: [ConferenceService],
    exports: [ConferenceComponent, ConferenceListComponent, ConferenceDetailComponent]
})
export class ConferenceModule {

    constructor(private conferenceService: ConferenceService) {
    }
}