import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
// import { RatingModule, ModalModule } from 'ng2-bootstrap';

import { BabyMatrixComponent } from './baby-matrix.component';
import { routing } from './baby-matrix.routing';
import {DataTableModule} from 'primeng/datatable';

import { DropdownModule} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing,
        DropdownModule,
        DataTableModule,
    ],
    declarations: [
        BabyMatrixComponent
    ],
    providers: [
    ]
})
export class BabyMatrixModule { }