import { UsuariosClienteModule } from './usuarios-cliente/usuarios-cliente.module';
import { NgModule } from '@angular/core';
import { BusynessModelComponent } from './busyness-model/busyness-model.component';
import { CommonModule } from '@angular/common';
import { EditarItemBusynessComponent } from './busyness-model/editar-item-busyness/editar-item-busyness.component';
import { HomeBusynessComponent } from './busyness-model/home/home.component';

import { routing } from  '../app.routing';
import { FormsModule } from '@angular/forms';
import { MapaPersonaComponent } from './mapa-persona/mapa-persona.component';
import { ResultadoComponent } from './mapa-persona/resultado/resultado.component';
import { HomePersonaComponent } from './mapa-persona/home/home.component';
import { AdmAtividadesComponent } from './adm-atividades/adm-atividades.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    BusynessModelComponent,
    EditarItemBusynessComponent,
    HomeBusynessComponent,
    MapaPersonaComponent,
    ResultadoComponent,
    HomePersonaComponent,
    AdmAtividadesComponent,
  ],
  imports: [ 
    CommonModule,
    routing,
    FormsModule,
    BrowserModule,
    UsuariosClienteModule
   ]
})
export class FerramentasModule { }
