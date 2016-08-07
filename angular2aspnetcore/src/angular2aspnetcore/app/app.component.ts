import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SpeakerRegisterHomeComponent } from './home/speakerregisterhome.component';
import { SpeakerListComponent } from './speakerlist/speakerlist.component';
import { PageNotFoundComponent } from './pagenotfound.component';

@Component({
    selector: 'my-app',
    templateUrl: '../app.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [SpeakerRegisterHomeComponent, SpeakerListComponent, PageNotFoundComponent]
})

export class AppComponent {

}