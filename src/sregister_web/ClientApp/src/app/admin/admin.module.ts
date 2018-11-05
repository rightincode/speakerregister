import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admindashboard.component';

import { AdminRoutingModule } from './admin.routing';

@NgModule({
    imports: [AdminRoutingModule],
    declarations: [AdminComponent, AdminDashboardComponent],
    providers: []
})
export class AdminModule {

    constructor() {
    }
}