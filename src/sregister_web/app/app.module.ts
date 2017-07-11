import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule, Http } from '@angular/http';

/* App Root */
import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import './rxjs-operators';

/* Feature Modules */
import { SpeakerModule } from './speaker/speaker.module';
import { ConferenceModule } from './conference/conference.module';

//Shared Services
import { TokenService } from './services/token/token.service';
import { HttpHelperService } from './services/httphelper/httphelper.service';
import { Constants } from './config/constants';

/* Routing */
import { AppRoutingModule, appRouterProviders } from './app.routing';

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, ConferenceModule, SpeakerModule, AppRoutingModule],
    declarations: [AppComponent, PageNotFoundComponent],
    providers: [appRouterProviders, TokenService, Constants, HttpHelperService],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(private tokenService: TokenService){}
}