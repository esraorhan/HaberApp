import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParacevirPageRoutingModule } from './paracevir-routing.module';

import { ParacevirPage } from './paracevir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParacevirPageRoutingModule
  ],
  declarations: [ParacevirPage]
})
export class ParacevirPageModule {}
