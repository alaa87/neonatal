import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { User, Country } from 'assets/showcase/data/user';

//Validators
@Component({
    selector: 'login',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./login.scss'],
    templateUrl: './login.html',
})
export class LoginComponent implements OnInit  {

    user: User = new User;
    facilities: any[];
    
    constructor(private _router: Router, fb:FormBuilder) {
        if(JSON.parse(localStorage.getItem('User')))
        {
            this._router.navigateByUrl('/pages/babyDefinition/');
        }
    }

    ngOnInit(){
        this.facilities = [];
        this.facilities = [
            {name: 'Facility 1', code: 'NY'},
            {name: 'Facility 2', code: 'RM'},
            {name: 'Facility 3', code: 'LDN'},
            {name: 'Facility 4', code: 'IST'},
            {name: 'Facility 5', code: 'PRS'}
        ]
    }

    onSubmit() {
        localStorage.setItem('User', JSON.stringify(this.user));
        this.user.Country = new Country;
        this.user.Country.name = "Jordan";
        this.user.Country.code = "JO";
        this.user.Name = "Avatar";
        this.user.Email = "Avatar";
        localStorage.setItem('User', JSON.stringify(this.user));
        this._router.navigateByUrl('/pages/home');
      }
}
