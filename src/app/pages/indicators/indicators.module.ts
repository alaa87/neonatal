import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
// import { RatingModule, ModalModule } from 'ng2-bootstrap';

import { IndicatorsComponent } from './indicators.component';
import { routing } from './indicators.routing';
import {DataTableModule} from 'primeng/datatable';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing,
        DataTableModule,
    ],
    declarations: [
        IndicatorsComponent
    ],
    providers: [
    ]
})
export class IndicatorsModule { }