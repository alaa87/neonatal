import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export class GreaterThanValidator {

  public static validate =  (gt: number): ValidatorFn => {
    return (control: AbstractControl): {[key: string]: boolean} => {
      let v: number = +control.value;
      return v > +gt ? null : {gt: true};
    };
  }
}