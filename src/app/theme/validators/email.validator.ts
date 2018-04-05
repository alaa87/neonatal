import {AbstractControl} from '@angular/forms';

export class EmailValidator {

  public static validate(c:AbstractControl) {
      let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      if (c.value != null && c.value.trim().length > 0) {
          return EMAIL_REGEXP.test(c.value) ? null : {
              validateEmail: {
                  valid: false
              }
          };
      }
      else {
          return null;
      }
  }
}
