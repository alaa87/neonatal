import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export class NotEqualValidator {

  public static validate = (val: any): ValidatorFn => {
    
    return (control: AbstractControl): {[key: string]: boolean} => {
      
      let v: any = control.value;
      
      return val !== v ? null : {notEqual: true};
    };
  }
}