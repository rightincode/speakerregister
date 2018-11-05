import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeakerListComponent } from './speakerlist.component';
import { SpeakerDetailComponent } from './speakerdetail.component';


const routes: Routes = [
    { path: 'speakerlist', component: SpeakerListComponent },
    { path: 'speakerdetail/:id', component: SpeakerDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SpeakerRoutingModule { }