import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export class RangeValidator {

  public static validate = (range: Array<number>): ValidatorFn => {
    return (control: AbstractControl): {[key: string]: any} => {
        let v: number = +control.value;
        if (v) {
            return v >= range[0] && v <= range[1] ? null : { range: true };
        }
        else {
            return null;
        }
    };
  }
}