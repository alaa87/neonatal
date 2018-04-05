import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuService {

    constructor(private _http: Http) { }

    getMenus() {
        return this._http.get('assets/showcase/menu.json')
            .map((response: Response) => response.json())
    }
}