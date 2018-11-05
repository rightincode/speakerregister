import { NgModule }      from '@angular/core';
import { CommonModule}   from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { SpeakerRegisterHomeComponent } from '../home/speakerregisterhome.component';
import { SpeakerListComponent } from './speakerlist.component';
import { SpeakerDetailComponent } from './speakerdetail.component';
import { SpeakerService } from './speaker.service';

import { SpeakerRoutingModule } from './speaker.routing';

@NgModule({
    imports: [CommonModule, FormsModule, SpeakerRoutingModule],
    declarations: [SpeakerRegisterHomeComponent, SpeakerListComponent, SpeakerDetailComponent],
    providers: [SpeakerService]    
})
export class SpeakerModule {

    constructor(private speakerService: SpeakerService) {
    }
}