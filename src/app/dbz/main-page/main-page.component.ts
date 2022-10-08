import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  //personasjes:Personaje[]=[]
  
  nuevo:Personaje={
    nombre:'juan',
    poder:3000
  }

  

  constructor(){}
}
