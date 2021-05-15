import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { SbtnHomeComponent } from './sbtn-home/sbtn-home.component';
import { CommonModule } from '@angular/common';
import { FerramentasModule } from './ferramentas/ferramentas.module';


@NgModule({
  declarations: [
    AppComponent,
    SbtnHomeComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    CommonModule,
    FerramentasModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
