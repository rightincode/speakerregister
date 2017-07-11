import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeakerRegisterHomeComponent } from './home/speakerregisterhome.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes: Routes = [
    { path: 'home', component: SpeakerRegisterHomeComponent },
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

