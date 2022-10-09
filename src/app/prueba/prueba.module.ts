import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './pruebas/prueba.component';



@NgModule({
  declarations: [
    PruebaComponent
  ],
  exports:[
    PruebaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PruebaModule { }
