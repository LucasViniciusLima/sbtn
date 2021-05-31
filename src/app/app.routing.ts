import { ResultadoComponent } from './ferramentas/mapa-persona/resultado/resultado.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SbtnHomeComponent } from './sbtn-home/sbtn-home.component';
import { BusynessModelComponent } from './ferramentas/busyness-model/busyness-model.component';
import { EditarItemBusynessComponent } from './ferramentas/busyness-model/editar-item-busyness/editar-item-busyness.component';
import { HomeBusynessComponent } from './ferramentas/busyness-model/home/home.component';
import { LoginComponent } from './ferramentas/login/login.component';
import { MapaPersonaComponent } from './ferramentas/mapa-persona/mapa-persona.component';
import { HomePersonaComponent } from './ferramentas/mapa-persona/home/home.component';
import { AdmAtividadesComponent } from './ferramentas/adm-atividades/adm-atividades.component';

const APP_ROUTES: Routes = [
    { path: '', component: SbtnHomeComponent },
    {
        path: 'businessmodel', component: BusynessModelComponent,
        children: [
            { path: '', component: HomeBusynessComponent },
            { path: 'editar', component: EditarItemBusynessComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'admatividades', component: AdmAtividadesComponent },
    { path: 'personamap', component: MapaPersonaComponent, children: [
        { path: '', component:HomePersonaComponent},
        { path: 'resultado', component: ResultadoComponent}
    ] },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);