import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export class DigitsValidator {

  public static validate : ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
    let v: string = control.value;
    return /^\d+$/.test(v) ? null : {digits: true};
  };
}