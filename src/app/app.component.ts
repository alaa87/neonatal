import { Component, ViewContainerRef } from '@angular/core';
import { ThemePreloader, ThemeSpinner } from './theme/services';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private _spinner: ThemeSpinner) {

    }
    public ngAfterViewInit(): void {
        // hide spinner once all loaders are completed
        ThemePreloader.load().then((values) => {
            this._spinner.hide();
        });
    }
}
