import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export class MinValidator {
  
  public static validate =  (min: number): ValidatorFn => {
      return (control: AbstractControl): { [key: string]: any } => {
          if (control.value) {
              return control.value >= +min ? null : { actualValue: control.value, requiredValue: +min, min: true };
          }
          else {
              return null;
          }
    };
  }
}