﻿import { NgModule }     from '@angular/core';
import { CommonModule}  from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { ConferenceComponent } from './conference.component';
import { ConferenceListComponent } from './conferencelist.component';
import { ConferenceDetailComponent } from './conferencedetail.component';
import { ConferenceService } from './conference.service';

import { ConferenceRoutingModule } from './conference.routing';

@NgModule({
    imports: [CommonModule, FormsModule, ConferenceRoutingModule],
    declarations: [ConferenceComponent, ConferenceListComponent, ConferenceDetailComponent],
    providers: [ConferenceService]
})
export class ConferenceModule {

    constructor(private conferenceService: ConferenceService) {
    }
}