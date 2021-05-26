import { NgModule } from '@angular/core';
import { BusynessModelComponent } from './busyness-model/busyness-model.component';
import { CommonModule } from '@angular/common';
import { EditarItemBusynessComponent } from './busyness-model/editar-item-busyness/editar-item-busyness.component';
import { HomeComponent } from './busyness-model/home/home.component';

import { routing } from  '../app.routing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MapaPersonaComponent } from './mapa-persona/mapa-persona.component';


@NgModule({
  declarations: [
    BusynessModelComponent,
    EditarItemBusynessComponent,
    HomeComponent,
    LoginComponent,
    MapaPersonaComponent,
  ],
  imports: [ 
    CommonModule,
    routing,
    FormsModule
   ]
})
export class FerramentasModule { }
