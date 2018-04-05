import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export class NumberValidator {
    public static validate: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {
        if (control.value) {
            return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(control.value) ? null : { 'number': true };
        }
        else {
            return null;
        }
  };
}