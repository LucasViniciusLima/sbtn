import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SbtnHomeComponent } from './sbtn-home/sbtn-home.component';
import { BusynessModelComponent } from './ferramentas/busyness-model/busyness-model.component';

const APP_ROUTES : Routes = [
    { path: '', component: SbtnHomeComponent },
    { path: 'businessmodel', component: BusynessModelComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);