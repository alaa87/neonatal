import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export class MaxValidator {
  
  public static validate =  (max: number): ValidatorFn => {
      return (control: AbstractControl): { [key: string]: any } => {
          if (control.value) {
              return control.value <= +max ? null : { actualValue: control.value, requiredValue: +max, max: true };
          }
          else {
              return null;
          }
    };
  }
}