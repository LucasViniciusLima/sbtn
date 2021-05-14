import { NgModule } from '@angular/core';
import { BusynessModelComponent } from './busyness-model/busyness-model.component';
import { CommonModule } from '@angular/common';
import { EditarItemBusynessComponent } from './busyness-model/editar-item-busyness/editar-item-busyness.component';
import { HomeComponent } from './busyness-model/home/home.component';

import { routing } from  '../app.routing';

@NgModule({
  declarations: [
    BusynessModelComponent,
    EditarItemBusynessComponent,
    HomeComponent
  ],
  imports: [ CommonModule, routing ]
})
export class FerramentasModule { }
