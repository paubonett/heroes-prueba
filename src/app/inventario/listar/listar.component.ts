import { Component, Input} from '@angular/core';
import { Inventario } from '../interface/interface';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent{

  @Input() inv:Inventario[] =[]  
  
  nuevo :Inventario[] =[] 


  constructor() { }

  listar(n: string){
    this.nuevo = this.inv.filter((item)=>{
      return item.n === n
        
    })
  }
 
}
