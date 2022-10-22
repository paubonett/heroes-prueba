import { Component, Input} from '@angular/core';
import { Inventario } from '../interface/inventario.interface';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent  {

  
  @Input() inventarios: Inventario[] = [] 
  constructor() {
    
  }
  nu: Inventario[] = []
  valor:number = 1;
  i:number = 1

  acumula(){
    
    console.log(this.valor)
  }

  acumular(id: any){
    this.nu = this.inventarios.filter((item)=>{
        if(item.id == 1){
          this.valor += this.i
          console.log(this.valor, id)
        }
        return this.i
    })
  }

  restar(id: any){
    this.nu = this.inventarios.filter((item)=>{
      if(item.id == id){
        this.valor -= this.i
        console.log(this.valor, id)
      }
      return this.i
  })
  }
}