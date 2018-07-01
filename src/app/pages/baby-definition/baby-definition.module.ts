import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
// import { RatingModule, ModalModule } from 'ng2-bootstrap';

import { BabyDefinitionComponent } from './baby-definition.component';
import { routing } from './baby-definition.routing';

import { SelectButtonModule, DropdownModule, RadioButtonModule, CalendarModule} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing,
        SelectButtonModule,
        DropdownModule,
        RadioButtonModule,
        CalendarModule,
        // RatingModule.forRoot(),
        // ModalModule.forRoot(),
    ],
    declarations: [
        BabyDefinitionComponent
    ],
    providers: [
    ]
})
export class BabyDefinitionModule { }