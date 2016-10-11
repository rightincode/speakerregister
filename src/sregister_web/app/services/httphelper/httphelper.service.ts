import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { TokenService } from '../token/token.service';
import { Constants } from '../../config/constants';

@Injectable()

export class HttpHelperService {

    constructor(private tokenService: TokenService, private constants: Constants) {
        
    }

    getAuthRequestOptionsArg(): RequestOptions {
 
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.tokenService.loadToken());

        let options = new RequestOptions({ headers: headers });

        return options;
    }
}