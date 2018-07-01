import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { BabyMatrixComponent } from './baby-matrix.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: BabyMatrixComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
