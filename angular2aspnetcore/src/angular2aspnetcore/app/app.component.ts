import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { SpeakerService } from './services/speaker.service';

import './rxjs-operators';

@Component({
    selector: 'my-app',
    templateUrl: '../app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, SpeakerService]
})

export class AppComponent {

}