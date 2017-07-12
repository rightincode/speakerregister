import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admindashboard.component';

import { AuthGuard } from '../services/auth/authguard.service';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    { path: '', component: AdminDashboardComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    providers: [AuthGuard],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule { }