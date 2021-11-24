import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthUserGuardService } from "./ferramentas/guards/auth.guard";
import { AuthGuardService } from "./login/auth.guard";

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
import { ResultadoComponent } from './ferramentas/mapa-persona/resultado/resultado.component';
import { FerramentasComponent } from "./ferramentas/ferramentas.component";
import { MainmenuComponent } from "./ferramentas/mainmenu/mainmenu.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    { path: '', component: SbtnHomeComponent },
    { path: 'usuario-entrar', component: EntrarComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'ferramentas', component: FerramentasComponent, canActivate: [AuthGuardService],
        children: [
            { path: '', component: MainmenuComponent },
            {
                path: 'businessmodel', component: BusynessModelComponent, canActivate: [AuthUserGuardService],
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
        ]
    },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }