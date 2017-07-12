import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule, Http } from '@angular/http';

/* App Root */
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contactus-component';
import { PageNotFoundComponent } from './pagenotfound.component';
import './rxjs-operators';

/* Feature Modules */
import { SpeakerModule } from './speaker/speaker.module';
import { ConferenceModule } from './conference/conference.module';
import { AdminModule } from './admin/admin.module';

//Shared Services
import { TokenService } from './services/token/token.service';
import { HttpHelperService } from './services/httphelper/httphelper.service';
import { Constants } from './config/constants';

/* Routing */
import { AppRoutingModule, appRouterProviders } from './app.routing';

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, ConferenceModule, SpeakerModule, AdminModule, AppRoutingModule],
    declarations: [AppComponent, ContactUsComponent, PageNotFoundComponent],
    providers: [appRouterProviders, TokenService, Constants, HttpHelperService],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(private tokenService: TokenService){}
}