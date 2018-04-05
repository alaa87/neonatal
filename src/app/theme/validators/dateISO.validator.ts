import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

export class DateISOValidator {

  public static validate: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
    let v: string = control.value;
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : {dateISO: true};
  };
}