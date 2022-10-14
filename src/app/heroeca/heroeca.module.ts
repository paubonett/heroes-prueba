import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';

import { heroecaService } from './services/heroeca.service';
import { superheroesComponent } from './superheroes/superheroes.component';
import { PrinComponent } from './prin/prin.component';
import { ModalComponent } from './modal/modal.component';




@NgModule({
  declarations: [
    MainpageComponent,
    superheroesComponent,
    PrinComponent,
    ModalComponent
    
  ],
  
  imports: [
    CommonModule
  ],
  exports: [
    MainpageComponent,
    ModalComponent
  ],
  providers:[
    heroecaService
  ]
})
export class HeroecaModule { }
