import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SbtnHomeComponent } from './sbtn-home/sbtn-home.component';

@NgModule({
  declarations: [
    AppComponent,
    SbtnHomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
