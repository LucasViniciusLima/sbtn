import { NgModule } from '@angular/core';
import { VerTodosComponent } from './ver-todos/ver-todos.component';
import { EditarComponent } from './editar/editar.component';
import { TestesIniciadosComponent } from './testes-iniciados/testes-iniciados.component';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EntrarComponent } from './entrar/entrar.component';

@NgModule({
  declarations: [
    VerTodosComponent,
    EditarComponent,
    TestesIniciadosComponent,
    EntrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    EntrarComponent
  ]
})
export class UsuariosClienteModule { }
