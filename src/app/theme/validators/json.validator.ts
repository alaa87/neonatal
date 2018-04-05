import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export class JsonValidator {

  public static validate: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
    let v: string = control.value;

    try {
      let obj = JSON.parse(v);
      
      if (Boolean(obj) && typeof obj === 'object') {
        return null;
      }
    } catch (e) {

    }
    return {json: true};
  };
}