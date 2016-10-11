import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Token } from './token';
import { Constants } from '../../config/constants'

@Injectable()
export class TokenService {

    errorMessage: string = '';

    constructor(private http: Http, private constants: Constants) {
        this.loadTokenClientCredentials()
            .subscribe(
            token => this.saveToken(token),
            error => this.errorMessage = <any>error
            );
    }

    loadToken(): any {
        return sessionStorage.getItem(this.constants.clientCredentialTokenName);
    }

    loadTokenClientCredentials(): Observable<Token> {

        return this.http.post(this.constants.tokenEndPoint,
                this.constants.clientCredentialTokenPostBody,
                { headers: this.constants.clientCredentialTokenPostHeader })
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response): any {
        let body: any = res.json();
        return body || {};
    }

    private handleError(error: any): Observable<Token> {
        // in a real world app, we might use a remote logging infrastructure
        // we'd also dig deeper into the error to get a better message
        let errMsg: any = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private saveToken(token: Token) {
        sessionStorage.setItem(this.constants.clientCredentialTokenName, token.access_token);
    }
}