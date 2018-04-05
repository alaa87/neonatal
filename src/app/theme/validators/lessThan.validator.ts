import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export class LessThanValidator {

  public static validate =  (lt: number): ValidatorFn => {
    return (control: AbstractControl): {[key: string]: boolean} => {
      let v: number = +control.value;
      return v < +lt ? null : {lt: true};
    };
  }
}