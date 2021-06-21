import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { SbtnHomeComponent } from './sbtn-home/sbtn-home.component';
import { CommonModule } from '@angular/common';
import { FerramentasModule } from './ferramentas/ferramentas.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';


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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
