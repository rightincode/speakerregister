import { Injectable }     from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Conference } from './conference';
import { Constants } from '../config/constants';

import { HttpHelperService } from '../services/httphelper/httphelper.service';

@Injectable()

export class ConferenceService {

    private conferences: Conference[];

    errorMessage: string;

    constructor(private http: Http, private constants: Constants, private httpHelperService: HttpHelperService) {
        
    }

    getConferences(): Observable<Conference[]> {
        return this.loadConferences();
    }

    getConferenceById(id: number): Conference {

        let foundConference: Conference = this.conferences.find((conference: Conference) => conference.id === id);

        return foundConference ? foundConference : new Conference();
    }

    saveConference(currentConference: Conference): void {

        if (currentConference) {
            if (currentConference.id <= 0) {
                // adding conference
                currentConference.id = this.conferences.length + 1;
                this.conferences.push(currentConference);
            } else {
                // updating conference
                let conferenceIndex: number = this.conferences.findIndex((conference: Conference) => conference.id === currentConference.id);
                if (conferenceIndex > 0) {
                    this.conferences[conferenceIndex] = currentConference;
                }
            }
        }
    }

    private loadConferences(): Observable<Conference[]> {
        return this.http.get(this.constants.conferenceApi, this.httpHelperService.getAuthRequestOptionsArg())
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response): any[] {
        let body: any = res.json();
        return body || {};
    }

    private handleError(error: any): Observable<Conference[]> {
        // in a real world app, we might use a remote logging infrastructure
        // we'd also dig deeper into the error to get a better message
        let errMsg: any = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}