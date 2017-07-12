import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConferenceComponent } from './conference.component';
import { ConferenceListComponent } from './conferencelist.component';
import { ConferenceDetailComponent } from './conferencedetail.component';

const routes: Routes = [
    {
        //path: '', //for lazyloading
        path: 'conferencemanagement',
        component: ConferenceComponent,
        children: [
            { path: '', component: ConferenceListComponent, pathMatch: "full" },
            { path: ':id', component: ConferenceDetailComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ConferenceRoutingModule { }
