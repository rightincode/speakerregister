import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_PROVIDERS } from '@angular/http';

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
    imports: [BrowserModule, ConferenceModule, SpeakerModule, routing],
    declarations: [AppComponent, PageNotFoundComponent],
    providers: [appRouterProviders, HTTP_PROVIDERS],
    bootstrap: [AppComponent]
})
export class AppModule { }