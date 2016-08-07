import { provideRouter, RouterConfig } from '@angular/router';
import { SpeakerRegisterHomeComponent } from './home/speakerregisterhome.component';
import { SpeakerListComponent } from './speakerlist/speakerlist.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes: RouterConfig = [
    { path: 'home', component: SpeakerRegisterHomeComponent },
    { path: 'speaker-list', component: SpeakerListComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
