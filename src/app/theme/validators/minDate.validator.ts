import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

export class MinDateValidator {

  public static validate  = (minDate: any): ValidatorFn => {

  if (!/Invalid|NaN/.test(new Date(minDate).toString()) && !(minDate instanceof Function)) {
    throw Error('minDate value must be or return a formatted date');
  }

  return (control: AbstractControl): {[key: string]: any} => {
    
    let d: Date = new Date(control.value);

    if (!/Invalid|NaN/.test(new Date(d).toString())) return {minDate: true};
    if (minDate instanceof Function) minDate = minDate();

    return d >= new Date(minDate) ? null : {minDate: true};
  };
  }
}