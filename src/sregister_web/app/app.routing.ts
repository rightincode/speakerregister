import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeakerRegisterHomeComponent } from './home/speakerregisterhome.component';
import { ContactUsComponent } from './contactus-component';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes: Routes = [
    //{ path: 'conferencemanagement', loadChildren: 'app/conference/conference.module#ConferenceModule'}, //for lazyloading
    { path: 'home', component: SpeakerRegisterHomeComponent },
    //{ path: 'compose', component: ContactUsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

export const appRouterProviders: any[] = [
];

