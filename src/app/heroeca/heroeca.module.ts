import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';

import { heroecaService } from './services/heroeca.service';
import { superheroesComponent } from './superheroes/superheroes.component';
import { PruComponent } from './pru/pru.component';



@NgModule({
  declarations: [
    MainpageComponent,
    superheroesComponent,
    PruComponent
  ],
  
  imports: [
    CommonModule
  ],
  exports: [
    MainpageComponent
  ],
  providers:[
    heroecaService
  ]
})
export class HeroecaModule { }
