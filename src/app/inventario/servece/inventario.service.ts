import { Injectable } from "@angular/core";
import { Inventario } from "src/app/inventario/interface/inventario.interface";

@Injectable()
export class InventarioServece{
  public inventario:Inventario[]=[
    {
      id: 1,
      producto:
        { nombre: "cuaderno",
        logotipo: './assets/notebook-png.webp'
        },
    },
    {
      id: 2,
      producto: { nombre: "grapadora", logotipo: './assets/grapadora.png' }
    },
    {
      id: 3,
      producto: { nombre: "lapiz", logotipo: './assets/pencil-png.webp' }
    }
  ]

  get inv(): Inventario[] {
    return [...this.inventario];
  }
}