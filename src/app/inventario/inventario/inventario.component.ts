import { Component, EventEmitter} from '@angular/core';
import { Inventario } from '../interface/inventario.interface';
import { InventarioServece } from '../servece/inventario.service';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',

})


export class InventarioComponent {

  i: number = 4;

  constructor(public InventarioServece: InventarioServece) {
    this.inventarios = this.InventarioServece.inv
  }
  nu: Inventario[]=[]
  inventarios: Inventario[] = []

  nuevo: Inventario = {
    id: 0,
    producto: {
      nombre: '',
      logotipo: ''
    }
  }

  Agregrani() {

    let result = {
      id: this.i++,
      cantidadp: 1,
      producto: {
        nombre: '',
        logotipo: ''
      }
    }

    this.nuevo = result;

    this.inventarios.push(this.nuevo)
    console.log(this.inventarios)
    this.almacenar()
  }
  opc(){

  }
   nuevo1: Inventario[] = [] 
 
   listar(id: any){
     this.nuevo1 = this.inventarios.filter((item)=>{
      console.log
         return item.id == id;
     })
    }

  almacenar() {
    localStorage.setItem(`${this.nuevo.id}`, JSON.stringify(this.inventarios))
  }
}


