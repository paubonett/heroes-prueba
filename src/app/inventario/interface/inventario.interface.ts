export interface Inventario {
  id: number;
  cantidadp: number;
  producto: Producto;
}

export interface Producto {
  nombre: string;
  logotipo: string;
}