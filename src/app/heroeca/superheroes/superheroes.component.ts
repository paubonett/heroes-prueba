import { Component } from '@angular/core';
import { heroecaService } from '../services/heroeca.service';


@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./app.component.css']
  
})
export  class superheroesComponent {
  /*get Heroe() {
    return this.categoriasheroService.Heroe;
  }*/
  get superheroe(){
    return this.heroecaService.superheroe;
  }
  constructor(public heroecaService: heroecaService ) {}
}