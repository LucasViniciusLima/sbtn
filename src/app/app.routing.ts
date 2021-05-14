import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SbtnHomeComponent } from './sbtn-home/sbtn-home.component';
import { BusynessModelComponent } from './ferramentas/busyness-model/busyness-model.component';
import { EditarItemBusynessComponent } from './ferramentas/busyness-model/editar-item-busyness/editar-item-busyness.component';
import { HomeComponent } from './ferramentas/busyness-model/home/home.component';


const APP_ROUTES : Routes = [
    { path: '', component: SbtnHomeComponent },
    { 
        path: 'businessmodel',
        component: BusynessModelComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'editar', component: EditarItemBusynessComponent }
        ]
     }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);