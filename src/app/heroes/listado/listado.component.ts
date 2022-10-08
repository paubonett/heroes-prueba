import { Component } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent{

  heroes: string[] =['Spiderman','Ironman','Hulk','Thor','capitan america']
  heroeborrado: string = ''

  borrar(){
    this.heroeborrado = this.heroes.shift() || ''  }
}
