import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';


@NgModule({
  declarations: [
    AppComponent, 
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    GifsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
