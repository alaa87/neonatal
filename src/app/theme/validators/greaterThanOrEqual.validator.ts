import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export class GreaterThanOrEqualValidator {

  public static validate =  (gte: number): ValidatorFn => {
    return (control: AbstractControl): {[key: string]: boolean} => {
      let v: number = +control.value;
      return v >= +gte ? null : {gte: true};
    };
  }
}