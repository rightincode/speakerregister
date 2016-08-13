import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { SpeakerRegisterHomeComponent } from './home/speakerregisterhome.component';
import { SpeakerListComponent } from './speaker/speakerlist.component';
import { SpeakerDetailComponent } from './speaker/speakerdetail.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { routing, appRouterProviders } from './app.routes';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [
        AppComponent,
        SpeakerRegisterHomeComponent,
        SpeakerListComponent,
        SpeakerDetailComponent,
        PageNotFoundComponent],
    providers: [appRouterProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }