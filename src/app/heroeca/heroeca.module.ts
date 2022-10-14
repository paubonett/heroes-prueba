import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';

import { heroecaService } from './services/heroeca.service';
import { superheroesComponent } from './superheroes/superheroes.component'
import { ModalComponent } from './modal/modal.component';
import { CasasComponent } from './casas/casas.component';




@NgModule({
  declarations: [
    MainpageComponent,
    superheroesComponent,
    ModalComponent,
    CasasComponent
  ],
  
  imports: [
    CommonModule
  ],
  exports: [
    MainpageComponent,
    ModalComponent,
    CasasComponent
  ],
  providers:[
    heroecaService
  ]
})
export class HeroecaModule { }
