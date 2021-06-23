import { NgModule } from '@angular/core';
import { BusynessModelComponent } from './busyness-model/busyness-model.component';
import { CommonModule } from '@angular/common';
import { EditarItemBusynessComponent } from './busyness-model/editar-item-busyness/editar-item-busyness.component';
import { HomeBusynessComponent } from './busyness-model/home/home.component';

import { routing } from  '../app.routing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MapaPersonaComponent } from './mapa-persona/mapa-persona.component';
import { ResultadoComponent } from './mapa-persona/resultado/resultado.component';
import { HomePersonaComponent } from './mapa-persona/home/home.component';
import { AdmAtividadesComponent } from './adm-atividades/adm-atividades.component';
import { SubUsuariosComponent } from './busyness-model/sub-usuarios/sub-usuarios.component';

@NgModule({
  declarations: [
    BusynessModelComponent,
    EditarItemBusynessComponent,
    HomeBusynessComponent,
    LoginComponent,
    MapaPersonaComponent,
    ResultadoComponent,
    HomePersonaComponent,
    AdmAtividadesComponent,
    SubUsuariosComponent
  ],
  imports: [ 
    CommonModule,
    routing,
    FormsModule
   ]
})
export class FerramentasModule { }
