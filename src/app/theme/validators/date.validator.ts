import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

export class DateValidator {

    public static validate: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {
        let v: string = control.value;
        if (v == null || v.toString().trim().length === 0) return null;

        return !/Invalid|NaN/.test(new Date(v).toString()) ? null : { date: true };
    };
}