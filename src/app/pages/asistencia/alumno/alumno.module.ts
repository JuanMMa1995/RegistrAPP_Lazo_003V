import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AlumnoPage } from './alumno.page';

import { AlumnoPageRoutingModule } from './alumno-routing.module';
import { QRCodeModule } from 'angularx-qrcode';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    AlumnoPageRoutingModule
  ],
  declarations: [AlumnoPage]
})
export class AlumnoPageModule {}
