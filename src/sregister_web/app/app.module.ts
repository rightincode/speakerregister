import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

/* App Root */
import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import './rxjs-operators';

/* Feature Modules */
import { SpeakerModule } from './speaker/speaker.module';
import { ConferenceModule } from './conference/conference.module';

/* Routing */
import { routing, appRouterProviders } from './app.routing';

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, ConferenceModule, SpeakerModule, routing],
    declarations: [AppComponent, PageNotFoundComponent],
    providers: [appRouterProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }