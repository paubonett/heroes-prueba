import { Component } from '@angular/core';
import { heroecaService } from '../services/heroeca.service';
import { Heroe } from '../interface/interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  superheroe: Array<Heroe> = [];

  constructor(public heroecaService: heroecaService) { 
    
      this.superheroe = this.heroecaService.superheroe; 
    
  }

 

}
