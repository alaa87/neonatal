import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CountryService } from 'app/theme/services/country.service';

@Component({
    selector: 'home',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./baby-matrix.scss'],
    templateUrl: './baby-matrix.html',
})
export class BabyMatrixComponent implements OnInit {

    ngOnInit() {
        
    }
    constructor(private _router: Router) {
        if (!JSON.parse(localStorage.getItem('User'))) {
            this._router.navigateByUrl('/');
        } else {

        }
    }
}
