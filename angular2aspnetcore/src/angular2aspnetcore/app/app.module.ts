import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { SpeakerModule } from './speaker/speaker.module';
import { routing, appRouterProviders } from './app.routes';

import './rxjs-operators';

@NgModule({
    imports: [BrowserModule, routing, SpeakerModule],
    declarations: [AppComponent, PageNotFoundComponent],
    providers: [appRouterProviders, HTTP_PROVIDERS],
    bootstrap: [AppComponent]
})
export class AppModule { }