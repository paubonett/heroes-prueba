import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ProductosComponent } from './productos/productos.component';
import { InventarioServece } from './serveces/inventario.service';
import { ListarComponent } from './listar/listar.component';
import {MatSelect, MatSelectModule} from '@angular/material/select';




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
    CommonModule,
    MatSelectModule
  ],
  providers:[
    InventarioServece
  ]
})
export class InventarioModule { }
