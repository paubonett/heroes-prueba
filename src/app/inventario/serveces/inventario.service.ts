import { Injectable } from "@angular/core";
import { Inventario } from "src/app/inventario/interface/interface";

@Injectable()
export class InventarioServece{
  public inventario:Inventario[]=[
    {
      n:'inventario',
      producto:'cuaderno',
      contador:2,
      img:'./assets/notebook-png.webp'
    },
    {
      n:'inventario',
      producto:'grapadora',
      contador:3,
      img:'./assets/grapadora.png'
    }
  ]
  get inv(): Inventario[] {
    return [...this.inventario];
}

}

