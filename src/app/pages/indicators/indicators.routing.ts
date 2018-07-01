import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { IndicatorsComponent } from './indicators.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: IndicatorsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
