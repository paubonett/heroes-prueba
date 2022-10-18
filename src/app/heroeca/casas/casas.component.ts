import { Component, Input} from '@angular/core';
import { Heroe } from '../interface/interface';
import { heroecaService } from '../services/heroeca.service';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html'
 
})
export class CasasComponent  {

 
  constructor() {
   }

   heroesBuscados : Heroe[] = [];
   @Input() hero: Heroe[] = [] 
 
   listar(casa: string){
     this.heroesBuscados = this.hero.filter((item)=>{
         return item.casa == casa;
     })
   }
  


 
}
