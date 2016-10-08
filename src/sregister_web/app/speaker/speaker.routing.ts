import { Routes, RouterModule } from '@angular/router';

import { SpeakerListComponent } from './speakerlist.component';
import { SpeakerDetailComponent } from './speakerdetail.component';


const routes: Routes = [
    { path: 'speakerlist', component: SpeakerListComponent },
    { path: 'speakerdetail/:id', component: SpeakerDetailComponent }
];

export const speakerRouting = RouterModule.forChild(routes);