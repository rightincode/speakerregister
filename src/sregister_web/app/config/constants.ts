import { Injectable } from '@angular/core';
import { Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class Constants {

    public tokenEndPoint: string = 'http://localhost:9440/connect/token';

    public clientCredentialTokenPostBody: URLSearchParams;
    
    public clientCredentialTokenPostHeader = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    public clientCredentialTokenName: string = 'sregister_access_token';

    public speakersApi: string = 'http://localhost:2353/api/speakers';

    constructor() {
        this.clientCredentialTokenPostBody = new URLSearchParams();
        this.clientCredentialTokenPostBody.append('grant_type', 'client_credentials');
        this.clientCredentialTokenPostBody.append('scope', 'sregisterAPI');
        this.clientCredentialTokenPostBody.append('client_id', 'sregisterClient');
        this.clientCredentialTokenPostBody.append('client_secret', 'speakerRegisterClientPassword');
    }
}