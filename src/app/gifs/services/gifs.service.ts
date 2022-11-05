import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey:string='QZZhAN2RbSRfUWZhyrVp81FoezaxaRMm'
  private _historial:string[]=[]
  
  public resultado:Gif[]=[]
  
  get historial(){
    return [...this._historial]
  }

  constructor(private http: HttpClient) {
    this._historial=JSON.parse(localStorage.getItem('historial')!)||[]
    this.resultado=JSON.parse(localStorage.getItem('resultado')!)||[]
   }

  buscarGifs(query:string = ''){

    query=query.trim().toLocaleLowerCase()

    if(!this._historial.includes(query)){
      this._historial.unshift(query)
      this._historial = this._historial.slice(0,10)
      
      localStorage.setItem('historial',JSON.stringify(this._historial))

    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=QZZhAN2RbSRfUWZhyrVp81FoezaxaRMm&q=${query}&limit=10`)
    
      .subscribe((resp)=>{
        console.log(resp.data);
        this.resultado = resp.data
        localStorage.setItem('resultados',JSON.stringify(this.resultado))

      })
  }

 
}
