import { Component } from '@angular/core';

@Component({
    template: `
    <h3>Speaker Register Administration</h3>
    <nav>
      <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
    </nav>
    <br /><br />
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}