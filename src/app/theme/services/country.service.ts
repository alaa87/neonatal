import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountryService {

    constructor(private _http: Http) { }

    getCountries() {
        return this._http.get('assets/showcase/data/countries.json')
            .map((response: Response) => response.json())
    }
}