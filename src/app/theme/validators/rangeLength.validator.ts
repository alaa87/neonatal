import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export class RangeLengthValidator {

  public static validate = (rangeLength: Array<number>): ValidatorFn => {
    return (control: AbstractControl): {[key: string]: boolean} => {
      let v: string = control.value;
      return v.length >= rangeLength[0] && v.length <= rangeLength[1] ? null : {rangeLength: true};
    };
  };
  
}