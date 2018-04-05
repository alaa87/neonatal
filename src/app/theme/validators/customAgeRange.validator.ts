import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

enum AgePeriod { Year = 1, Month = 2, Day = 3 }

export class CustomAgeRangeValidator {
    public static validate = (minAgeValue: any, minAgePeriodId: any, maxAgeValue: any, maxAgePeriodId: any): ValidatorFn => {
        return (control: AbstractControl): { [key: string]: any } => {
            let value = control.value;
            let isValid = null;
            if (value != null && (typeof value === "string" ? (value.trim().length > 0 && !isNaN(+value)) : (typeof +value === "number"))) {
                value = value * 1;
                if (value > 0) {
                    if (control.parent) {
                        let minAgePeriod = control.parent.controls[minAgePeriodId].value;
                        let maxAgePeriod = control.parent.controls[maxAgePeriodId].value;
                        if ((minAgePeriod != null && (typeof minAgePeriod === "string" ? (minAgePeriod.trim().length > 0 && !isNaN(+minAgePeriod)) : (typeof +minAgePeriod === "number")))
                            && (maxAgePeriod != null && (typeof maxAgePeriod === "string" ? (maxAgePeriod.trim().length > 0 && !isNaN(+maxAgePeriod)) : (typeof +maxAgePeriod === "number"))))
                        {
                            if (minAgeValue) {
                                let minAge = control.parent.controls[minAgeValue].value;
                                if (minAge != null && (typeof minAge === "string" ? (minAge.trim().length > 0 && !isNaN(+minAge)) : (typeof +minAge === "number")))
                                {
                                    minAge = minAgePeriod == AgePeriod.Year ? (minAge * 365) : (minAgePeriod == AgePeriod.Month ? (minAge * 30) : (minAge));
                                    value = maxAgePeriod == AgePeriod.Year ? (value * 365) : (maxAgePeriod == AgePeriod.Month ? (value * 30) : (value));
                                    isValid = value > minAge ? null : { customAgeRange: true };
                                }
                            }
                            else if (maxAgeValue) {
                                let maxAge = control.parent.controls[maxAgeValue].value;
                                if (maxAge != null && (typeof maxAge === "string" ? (maxAge.trim().length > 0 && !isNaN(+maxAge)) : (typeof +maxAge === "number"))) {
                                    maxAge = maxAgePeriod == AgePeriod.Year ? (maxAge * 365) : (maxAgePeriod == AgePeriod.Month ? (maxAge * 30) : (maxAge));
                                    value = minAgePeriod == AgePeriod.Year ? (value * 365) : (minAgePeriod == AgePeriod.Month ? (value * 30) : (value));
                                    isValid = value < maxAge ? null : { customAgeRange: true };
                                }
                            }
                        }
                    }
                }
                else {
                    isValid = { customAgeRange: true };
                }                
            }
            return isValid;
        };
    }
}