import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey:string='QZZhAN2RbSRfUWZhyrVp81FoezaxaRMm'
  private servicioUrl:string='https://api.giphy.com/v1/gifs'
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

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query)

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
    
      .subscribe((resp)=>{
        console.log(resp.data);
        this.resultado = resp.data
        localStorage.setItem('resultados',JSON.stringify(this.resultado))

      })
  }

 
}
