import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: 'app/pages/login/login.module#LoginModule'
    },
    {
        path: 'pages',
        component: Pages,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule'},
            { path: 'babyDefinition', loadChildren: 'app/pages/baby-definition/baby-definition.module#BabyDefinitionModule'},
            { path: 'babyMatrix', loadChildren: 'app/pages/baby-matrix/baby-matrix.module#BabyMatrixModule'},
            { path: 'indicators', loadChildren: 'app/pages/indicators/indicators.module#IndicatorsModule'},
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
