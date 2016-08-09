import { provideRouter, RouterConfig } from '@angular/router';

import { SpeakerRegisterHomeComponent } from './home/speakerregisterhome.component';
import { SpeakerListComponent } from './speaker/speakerlist.component';
import { SpeakerDetailComponent } from './speaker/speakerdetail.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes: RouterConfig = [
    { path: '', component: SpeakerRegisterHomeComponent },
    { path: 'home', component: SpeakerRegisterHomeComponent },
    { path: 'speakerlist', component: SpeakerListComponent },
    { path: 'speakerdetail/:id', component: SpeakerDetailComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
