import { Component, NgModule, ViewChild } from '@angular/core';
import { Inventario } from '../interface/interface';
import { InventarioServece } from '../serveces/inventario.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})



export class ProductosComponent  {
  selected:any
  contador:number
  productos: Array<Inventario> = []

  nuevo: Array<Inventario> = []

  constructor(public InventarioServece:InventarioServece) {
    this.productos = this.InventarioServece.inv
    this.selected = '1'
    this.contador = 1
  }
 
  

  almacenar(){

    this.contador+=1
    localStorage.setItem(`${this.contador}`, JSON.stringify(this.nuevo))
  }

   numero: number = 1
 

  acumular(valor:any){
    
    this.numero +=valor;
  }  

}
