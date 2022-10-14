import { verifyHostBindings } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { Heroe } from '../interface/interface';
import { ModalComponent } from '../modal/modal.component';
import { heroecaService } from '../services/heroeca.service';




@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./app.component.css']

})
export class superheroesComponent {

  @ViewChild(ModalComponent) modal: any;
 
  superheroe: Array<Heroe> = [];

  constructor(public heroecaService: heroecaService) {
    this.superheroe = this.heroecaService.superheroe; 
  }
 

  ver(personaje:Heroe) {
    this.modal.cargar(personaje);
   }

  /*
  get superheroe(){
    return this.heroecaService.superheroe;
  }
  */
}

