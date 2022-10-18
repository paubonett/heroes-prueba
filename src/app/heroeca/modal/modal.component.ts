import { Component } from '@angular/core';
import { heroecaService } from '../services/heroeca.service';
import { Heroe } from '../interface/interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  superheroe: Heroe = {nombre:'', bio:'',img:'', aparicion: '', casa: ''};

  constructor(public heroecaService: heroecaService) { 
    
  }

 cargar(personaje:Heroe){
  this.superheroe = personaje;
 }
}
