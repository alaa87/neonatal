import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
    selector: 'pages',
    template: `
     <router-outlet></router-outlet>
    `

    // <ba-sidebar></ba-sidebar>
    // <ba-page-top></ba-page-top>
    // <div class="al-main">
    //   <div class="al-content">
    //     <!--<ba-content-top></ba-content-top>-->
    //     <router-outlet></router-outlet>
    //   </div>
    // </div>
    // <ba-footer></ba-footer>
})
export class Pages {

    constructor() {
    }

    ngOnInit() {

    }
}
