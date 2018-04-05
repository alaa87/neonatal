import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { LoginComponent } from './login.component';
import { routing } from './login.routing';

import { DropdownModule, RadioButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    DropdownModule,
    RadioButtonModule,
  ],
  declarations: [
    LoginComponent,
  ],
})
export class LoginModule {}
