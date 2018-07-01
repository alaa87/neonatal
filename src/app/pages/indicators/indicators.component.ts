import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CountryService } from 'app/theme/services/country.service';

import { SelectItem } from 'primeng/primeng';

@Component({
    selector: 'indicators',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./indicators.scss'],
    templateUrl: './indicators.html',
})
export class IndicatorsComponent implements OnInit {
    
    busy: Subscription;
    families: any[];

    ngOnInit() {
        this.families = [];
        this.families.push({
            MortalityIndicators: 'The fetal death rate',
            Numerator: 300,
            Denominator: 150,
            MultiplicationFactor: 1000
        });
        this.families.push({
            MortalityIndicators: 'Neonatal mortality rate',
            Numerator: 240,
            Denominator: 500,
            MultiplicationFactor: 1000
        });
        this.families.push({
            MortalityIndicators: 'Early Neonatal mortality rate',
            Numerator: 542,
            Denominator: 800,
            MultiplicationFactor: 1000
        });
        this.families.push({
            MortalityIndicators: 'Late Neonatal mortality rate',
            Numerator: 215,
            Denominator: 300,
            MultiplicationFactor: 1000
        });
        this.families.push({
            MortalityIndicators: 'The perinatal death rate',
            Numerator: 625,
            Denominator: 450,
            MultiplicationFactor: 1000
        });
    }
    constructor(private _router: Router) {
        if (!JSON.parse(localStorage.getItem('User'))) {
            this._router.navigateByUrl('/');
        } else {

        }
        
    }
}
