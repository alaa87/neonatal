import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

export class MaxDateValidator {

  public static validate  = (maxDate: any): ValidatorFn => {
  if (!/Invalid|NaN/.test(new Date(maxDate).toString())&& !(maxDate instanceof Function)) {
    throw Error('maxDate value must be or return a formatted date');
  }

  return (control: AbstractControl): {[key: string]: any} => {
    
    let d: Date = new Date(control.value);

    if (!/Invalid|NaN/.test(new Date(d).toString())) return {maxDate: true};
    if (maxDate instanceof Function) maxDate = maxDate();

    return d <= new Date(maxDate) ? null : {maxDate: true};
  };
  }
}