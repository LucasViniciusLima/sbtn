import { UsuariosClienteModule } from './usuarios-cliente/usuarios-cliente.module';
import { NgModule } from '@angular/core';
import { BusynessModelComponent } from './busyness-model/busyness-model.component';
import { CommonModule } from '@angular/common';
import { EditarItemBusynessComponent } from './busyness-model/editar-item-busyness/editar-item-busyness.component';
import { HomeBusynessComponent } from './busyness-model/home/home.component';

import { FormsModule } from '@angular/forms';
import { MapaPersonaComponent } from './mapa-persona/mapa-persona.component';
import { ResultadoComponent } from './mapa-persona/resultado/resultado.component';
import { HomePersonaComponent } from './mapa-persona/home/home.component';
import { AdmAtividadesComponent } from './adm-atividades/adm-atividades.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuardService } from './guards/auth.guard';
import { AppRoutingModule } from '../app.routing.module';
import { AuthService } from '../login/auth.service';
import { FerramentasComponent } from './ferramentas.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';

@NgModule({
  declarations: [
    BusynessModelComponent,
    EditarItemBusynessComponent,
    HomeBusynessComponent,
    MapaPersonaComponent,
    ResultadoComponent,
    HomePersonaComponent,
    AdmAtividadesComponent,
    FerramentasComponent,
    MainmenuComponent,
  ],
  imports: [ 
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    UsuariosClienteModule
   ],
   providers: [AuthGuardService, AuthService]
})
export class FerramentasModule { }
