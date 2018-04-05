import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export class CustomRangeValidator {
    public static validate = ( minRangeList: any, maxRangeList: any[]): ValidatorFn => {
        return (control: AbstractControl): { [key: string]: any } => {
            let value = control.value;
            let minRangeValue: number;
            let maxRangeValue: number;
            let isValid = null;
            if (value != null && (typeof value === "string" ? (value.trim().length > 0 && !isNaN(+value)) : (typeof +value === "number"))) {
                value = value * 1;
                if (control.parent && minRangeList && minRangeList.length > 0) {
                    let minRangeNumbers: number[] = [];
                    minRangeList.forEach((minRangeControl) => {
                        let minValue = control.parent.controls[minRangeControl].value;
                        if (minValue != null &&(typeof minValue === "string" ? (minValue.trim().length > 0 && !isNaN(+minValue)) : (typeof +minValue === "number"))) {
                            minRangeNumbers.push(minValue*1);
                        }
                    });
                    minRangeValue = minRangeNumbers.length > 0 ? Math.max.apply(null, minRangeNumbers) : null;
                }
                if (control.parent && maxRangeList && maxRangeList.length > 0) {
                    let maxRangeNumbers: number[] = [];
                    maxRangeList.forEach((maxRangeControl) => { 
                        let maxValue = control.parent.controls[maxRangeControl].value;
                        if (maxValue != null &&(typeof maxValue === "string" ? (maxValue.trim().length > 0 && !isNaN(+maxValue)) : (typeof +maxValue === "number"))) {
                            maxRangeNumbers.push(maxValue * 1);
                        }
                    });
                    maxRangeValue = maxRangeNumbers.length > 0 ? Math.min.apply(null, maxRangeNumbers): null;
                }
                if (minRangeValue && maxRangeValue) {
                    isValid = value > minRangeValue && value < maxRangeValue ? null : { customRange: true };
                }
                else if (minRangeValue) {
                    isValid = value > minRangeValue ? null : { customRange: true }
                }
                else if (maxRangeValue) {
                    isValid = value < maxRangeValue ? null : { customRange: true }
                }
            }
            return isValid;
        };
    }
}