import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Speaker }        from './speaker';

@Injectable()

export class SpeakerService {

    private speakersUrl = 'app/testdata/speakers.json';  // url to web API
    private speakers: Speaker[];

    errorMessage: string;

    constructor(private http: Http) {
        this.loadSpeakers()
            .subscribe(
            speakers => this.speakers = speakers,
            error => this.errorMessage = <any>error);
    }

    getSpeakers(): Speaker[] {
        return this.speakers;
    }

    getSpeakerById(id: number): Speaker {

        let foundSpeaker: Speaker = this.speakers.find((speaker: Speaker) => speaker.id === id);

        return foundSpeaker ? foundSpeaker : new Speaker();
    }

    saveSpeaker(currentSpeaker: Speaker): void {

        if (currentSpeaker) {
            if (currentSpeaker.id <= 0) {
                // adding speaker
                currentSpeaker.id = this.speakers.length + 1;
                this.speakers.push(currentSpeaker);
            } else {
                // updating speaker
                let speakerIndex: number = this.speakers.findIndex((speaker: Speaker) => speaker.id === currentSpeaker.id);
                if (speakerIndex > 0) {
                    this.speakers[speakerIndex] = currentSpeaker;
                }
            }
        }
    }

    private loadSpeakers(): Observable<Speaker[]> {
        return this.http.get(this.speakersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response): any[] {
        let body: any = res.json();
        return body.data || {};
    }

    private handleError(error: any): Observable<Speaker[]> {
        // in a real world app, we might use a remote logging infrastructure
        // we'd also dig deeper into the error to get a better message
        let errMsg: any = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
