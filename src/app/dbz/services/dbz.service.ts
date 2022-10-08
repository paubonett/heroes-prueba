import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()
export class dbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'goku',
          poder: 150000
        },
        {
          nombre:'vegeta',
          poder: 8000
        }
      ];
    get personajes():Personaje[]{
        return[...this._personajes];
    }
    constructor(){}

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }
}