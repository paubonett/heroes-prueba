import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroecaModule } from './heroeca/heroeca.module';

import { HeroesModule } from './heroes/heroes.module';
import { PruebaModule } from './prueba/prueba.module';
import { ModalComponent } from './heroeca/modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    

    
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadorModule,
    DbzModule,
    HeroesModule,
    HeroecaModule,
    PruebaModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
