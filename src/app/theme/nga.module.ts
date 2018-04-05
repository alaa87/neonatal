import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import {
    HeaderComponent,
    SidebarComponent
} from './components';


// import { RatingModule, ModalModule } from 'ng2-bootstrap';

import {
    SystemSVGPipe,
    AppPicturePipe

} from './pipes';

import {
    EmailValidator,
    EqualPasswordsValidator
} from './validators';

import {
    MenuService,
    ThemePreloader,
    ThemeSpinner,
    CountryService
} from './services';
const NGA_COMPONENTS = [
    HeaderComponent,
    SidebarComponent
];

const NGA_PIPES = [
    AppPicturePipe,
    SystemSVGPipe
];

const NGA_VALIDATORS = [
    EmailValidator,
    EqualPasswordsValidator
];

const NGA_SERVICES = [
    MenuService,
    ThemePreloader,
    ThemeSpinner,
    CountryService
]

@NgModule({
    declarations: [
        ...NGA_PIPES,
        ...NGA_COMPONENTS
    ],
    imports: [
        // ModalModule.forRoot(),
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ...NGA_PIPES,
        ...NGA_COMPONENTS
    ],

    entryComponents: [NGA_COMPONENTS]
})
export class NgaModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: NgaModule,
            providers: [
                ...NGA_VALIDATORS,
                ...NGA_SERVICES,
            ],
        };
    }
}
