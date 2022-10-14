import { verifyHostBindings } from '@angular/compiler';
import { Component } from '@angular/core';
import { Heroe } from '../interface/interface';
import { heroecaService } from '../services/heroeca.service';




@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./app.component.css']

})
export class superheroesComponent {
 
  superheroe: Array<Heroe> = [];

  constructor(public heroecaService: heroecaService) {
    this.superheroe = this.heroecaService.superheroe; 
  }
 

  ver() {
    
   }

  /*
  get superheroe(){
    return this.heroecaService.superheroe;
  }
  */
}

