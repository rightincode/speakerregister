import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

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
        return this.loadSpeakers();
    }

    getSpeakerById(id: number): Observable<Speaker> {
        return this.loadSpeaker(id);
    }

    saveSpeaker(currentSpeaker: Speaker): Observable<Speaker> {
        return this.onSaveSpeaker(currentSpeaker);
    }

    private loadSpeakers(): Observable<Speaker[]> {
        return this.http.get(this.constants.speakersApi, this.httpHelperService.getAuthRequestOptionsArg())
            .map(this.extractSpeakerListData)
            .catch(this.handleSpeakersError);
    }

    private loadSpeaker(id: number): Observable<Speaker> {
        return this.http.get(this.constants.speakersApi + '/' + id, this.httpHelperService.getAuthRequestOptionsArg())
            .map(this.extractSpeakerData)
            .catch(this.handleSpeakerError);
    }

    private onSaveSpeaker(currentSpeaker: Speaker): Observable<Speaker> {

        if (currentSpeaker.id > 0) {
            return this.http.put(this.constants.speakersApi + '/' + currentSpeaker.id,
                JSON.stringify(currentSpeaker), this.httpHelperService.getAuthRequestOptionsArg('json'))
                .map(this.extractSpeakerData)
                .catch(this.handleSpeakerError);
        }
        else
        {
            return this.http.post(this.constants.speakersApi, JSON.stringify(currentSpeaker), this.httpHelperService.getAuthRequestOptionsArg('json'))
                .map(this.extractSpeakerData)
                .catch(this.handleSpeakerError);
        }        
    }

    private extractSpeakerListData(res: Response): Speaker[] {
        let body: any = res.json();
        let speakerList: Speaker[] = [];

        if (body) {
            for (let x: number = 0; x < body.length; x++) {
                let speaker = new Speaker();

                speaker.id = body[x].id;
                speaker.firstName = body[x].firstName;
                speaker.lastName = body[x].lastName;
                speaker.address1 = body[x].address1;
                speaker.address2 = body[x].address2;
                speaker.city = body[x].city;
                speaker.state = body[x].state;
                speaker.zipcode = body[x].zipcode;
                speaker.phoneNumber = body[x].phoneNumber;
                speaker.emailAddress = body[x].emailAddress;

                speakerList.push(speaker);
            }
        } 

        return speakerList;
    }

    private extractSpeakerData(res: Response): Speaker {
        let body: any = res.json();
        let speaker = new Speaker();

        if (body) {
            speaker.id = body.id;
            speaker.firstName = body.firstName;
            speaker.lastName = body.lastName;
            speaker.address1 = body.address1;
            speaker.address2 = body.address2;
            speaker.city = body.city;
            speaker.state = body.state;
            speaker.zipcode = body.zipcode;
            speaker.phoneNumber = body.phoneNumber;
            speaker.emailAddress = body.emailAddress;
        }

        return speaker;
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
