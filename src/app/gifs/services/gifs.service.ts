import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey:string='QZZhAN2RbSRfUWZhyrVp81FoezaxaRMm'
  private _historial:string[]=[]
  
  public resultado:any[]=[]
  
  get historial(){
    return [...this._historial]
  }

  constructor(private http: HttpClient) { }

  buscarGifs(query:string){

    query=query.trim().toLocaleLowerCase()

    if(!this._historial.includes(query)){
      this._historial.unshift(query)
      this._historial = this._historial.slice(0,10)
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=QZZhAN2RbSRfUWZhyrVp81FoezaxaRMm&q=${query}&limit=10`)
    
      .subscribe((resp:any)=>{
        console.log(resp.data);
        this.resultado = resp.data
      })
  }


}
