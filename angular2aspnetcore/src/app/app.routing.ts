import { Routes, RouterModule } from '@angular/router';

import { SpeakerRegisterHomeComponent } from './home/speakerregisterhome.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: SpeakerRegisterHomeComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders: any[] = [
];

export const routing = RouterModule.forRoot(routes);
