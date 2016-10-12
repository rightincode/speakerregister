import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import { Speaker } from './speaker';
import { Constants } from '../config/constants';

import { HttpHelperService } from '../services/httphelper/httphelper.service';

@Injectable()

export class SpeakerService {

    private speakers: Speaker[];

    errorMessage: string;

    constructor(private http: Http, private constants: Constants, private httpHelperService: HttpHelperService) {
       
    }

    getSpeakers(): Observable<Speaker[]> {

        return new Observable<Speaker[]>(observer => {
            this.loadSpeakers().subscribe(speakers => {
                    observer.next(speakers);
                    observer.complete();
                },
                error => {
                    observer.next(<any>error);
                    observer.complete();
                });     
        });
    }

    getSpeakerById(id: number): Observable<Speaker> {

        return new Observable<Speaker>(observer => {
            this.loadSpeaker(id).subscribe(speaker => {
                    observer.next(speaker);
                    observer.complete();
                },
                error => {
                    observer.next(<any>error);
                    observer.complete();
                });
        });
    }

    saveSpeaker(currentSpeaker: Speaker): Observable<Speaker> {

        return new Observable<Speaker>(observer => {
            this.onSaveSpeaker(currentSpeaker).subscribe(speaker => {
                    observer.next(speaker);
                    observer.complete();
                },
                error => {
                    observer.next(<any>error);
                    observer.complete();
                });
        });
    }

    private loadSpeakers(): Observable<Speaker[]> {
        return this.http.get(this.constants.speakersApi, this.httpHelperService.getAuthRequestOptionsArg())
            .map(this.extractData)
            .catch(this.handleSpeakersError);
    }

    private loadSpeaker(id: number): Observable<Speaker> {
        return this.http.get(this.constants.speakersApi + '/' + id, this.httpHelperService.getAuthRequestOptionsArg())
            .map(this.extractData)
            .catch(this.handleSpeakerError);
    }

    private onSaveSpeaker(currentSpeaker: Speaker): Observable<Speaker> {

        return this.http.post(this.constants.speakersApi, JSON.stringify(currentSpeaker), this.httpHelperService.getAuthRequestOptionsArg('json'))
            .map(this.extractData)
            .catch(this.handleSpeakerError);
    }


    private extractData(res: Response): any[] {
        let body: any = res.json();
        return body || {};
    }

    private handleSpeakersError(error: any): Observable<Speaker[]> {
        // in a real world app, we might use a remote logging infrastructure
        // we'd also dig deeper into the error to get a better message
        let errMsg: any = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private handleSpeakerError(error: any): Observable<Speaker> {
        // in a real world app, we might use a remote logging infrastructure
        // we'd also dig deeper into the error to get a better message
        let errMsg: any = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
