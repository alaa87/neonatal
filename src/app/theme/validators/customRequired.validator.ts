import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export class CustomRequiredValidator {
    public static validate = (isNotRequiredControl : any): ValidatorFn => {
        return (control: AbstractControl): { [key: string]: any } => {
            let isValid = null;
            if (control.parent) {
                let isNotRequiredControlValue = control.parent.controls[isNotRequiredControl].value;
                if (!isNotRequiredControlValue) {
                    isValid = control.value ? null : { customRequired: true };
                }
                else {
                    isValid = null;
                }
            }
            return isValid;
        };
    }
}