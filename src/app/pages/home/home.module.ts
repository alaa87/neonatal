import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
// import { RatingModule, ModalModule } from 'ng2-bootstrap';

import { HomeComponent } from './home.component';
import { routing } from './home.routing';

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
        HomeComponent
    ],
    providers: [
    ]
})
export class HomeModule { }