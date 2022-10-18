import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ProductosComponent } from './productos/productos.component';
import { InventarioServece } from './serveces/inventario.service';
import { ListarComponent } from './listar/listar.component';




@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    ProductosComponent,
    ListarComponent,
  ],
  exports:[
    PaginaPrincipalComponent,

  ],
  imports: [
    CommonModule
  ],
  providers:[
    InventarioServece
  ]
})
export class InventarioModule { }
