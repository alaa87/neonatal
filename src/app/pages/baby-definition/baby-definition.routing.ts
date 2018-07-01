import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { BabyDefinitionComponent } from './baby-definition.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: ':id',
        component: BabyDefinitionComponent
    }, {
        path: '',
        component: BabyDefinitionComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
