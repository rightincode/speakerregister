import { NgModule }      from '@angular/core';
import { CommonModule}   from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { SpeakerRegisterHomeComponent } from '../home/speakerregisterhome.component';
import { SpeakerListComponent } from './speakerlist.component';
import { SpeakerDetailComponent } from './speakerdetail.component';
import { SpeakerService } from '../services/speaker.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [SpeakerRegisterHomeComponent, SpeakerListComponent, SpeakerDetailComponent],
    providers: [SpeakerService],
    exports: [SpeakerRegisterHomeComponent, SpeakerListComponent, SpeakerDetailComponent]
})
export class SpeakerModule { }