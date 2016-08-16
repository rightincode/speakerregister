import { Routes, RouterModule } from '@angular/router';

import { ConferenceComponent } from './conference.component';
import { ConferenceListComponent } from './conferencelist.component';
import { ConferenceDetailComponent } from './conferencedetail.component';

const routes: Routes = [
    {
        path: 'conferencemanagement',
        component: ConferenceComponent,
        children: [
            { path: '', component: ConferenceListComponent },
            { path: ':id', component: ConferenceDetailComponent }
        ]
    }
];

export const conferenceRouting = RouterModule.forChild(routes);