import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export class EqualValidator {

  public static validate: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
    
    let v: string = control.value;
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : {'email': true};
  };
}