import { NgModule } from '@angular/core';
import { VerTodosComponent } from './ver-todos/ver-todos.component';
import { EditarComponent } from './editar/editar.component';
import { TestesIniciadosComponent } from './testes-iniciados/testes-iniciados.component';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    VerTodosComponent,
    EditarComponent,
    TestesIniciadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ]
})
export class UsuariosClienteModule { }
