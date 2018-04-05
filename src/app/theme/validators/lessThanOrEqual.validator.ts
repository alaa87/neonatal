import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export class LessThanOrEqualValidator {

  public static validate =  (lte: number): ValidatorFn => {
    return (control: AbstractControl): {[key: string]: boolean} => {
      let v: number = +control.value;
      return v <= +lte ? null : {lte: true};
    };
  }
}