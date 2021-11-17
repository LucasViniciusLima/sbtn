import { ResultadoComponent } from './ferramentas/mapa-persona/resultado/resultado.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SbtnHomeComponent } from './sbtn-home/sbtn-home.component';
import { BusynessModelComponent } from './ferramentas/busyness-model/busyness-model.component';
import { EditarItemBusynessComponent } from './ferramentas/busyness-model/editar-item-busyness/editar-item-busyness.component';
import { HomeBusynessComponent } from './ferramentas/busyness-model/home/home.component';
import { MapaPersonaComponent } from './ferramentas/mapa-persona/mapa-persona.component';
import { HomePersonaComponent } from './ferramentas/mapa-persona/home/home.component';
import { AdmAtividadesComponent } from './ferramentas/adm-atividades/adm-atividades.component';
import { VerTodosComponent } from './ferramentas/usuarios-cliente/ver-todos/ver-todos.component';
import { EditarComponent } from './ferramentas/usuarios-cliente/editar/editar.component';
import { EntrarComponent } from './ferramentas/usuarios-cliente/entrar/entrar.component';


const APP_ROUTES: Routes = [
    { path: '', component: SbtnHomeComponent },
    {
        path: 'businessmodel', component: BusynessModelComponent,
        children: [
            { path: '', component: HomeBusynessComponent },
            { path: 'editar', component: EditarItemBusynessComponent }
        ]
    },
    {
        path: 'admatividades',
        children: [
            { path: '', component: AdmAtividadesComponent },
            { path: 'editar', component: EditarComponent }
        ]
    },
    { path: 'admclientes', component: VerTodosComponent },
    {
        path: 'personamap', component: MapaPersonaComponent,
        children: [
            { path: '', component: HomePersonaComponent },
            { path: 'resultado', component: ResultadoComponent }
        ]
    },
    { path: 'usuario-entrar', component: EntrarComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);