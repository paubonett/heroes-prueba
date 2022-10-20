import { Component } from '@angular/core';
import { Inventario } from '../interface/inventario.interface';
import { InventarioServece } from '../servece/inventario.service';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',

})


export class InventarioComponent {

  i: number = 3;
 
  constructor(public InventarioServece: InventarioServece) {
    this.inventarios = this.InventarioServece.inv
  }

  inventarios: Inventario[] = []

  nuevo: Inventario = {
    id: 0,
    cantidadp: 0,
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
        nombre: 'lapiz',
        logotipo: './assets/pencil-png.webp'
      }
    }

    this.nuevo = result;

    this.inventarios.push(this.nuevo)
    console.log(this.inventarios)
    this.almacenar()
  }

  almacenar() {
    localStorage.setItem(`${this.nuevo.id}`, JSON.stringify(this.inventarios))
  }
}
