import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 

//modulos:
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';

//componentes/paginas
import { HomeComponent } from './home/home.component';
import { InformacionComponent } from './quienes somos/informacion.component';
import { JeepcherokeelimitedComponent } from './modelos/jeepcherokeelimited/jeepcherokeelimited.component';
import { JeeprenegadeComponent } from './modelos/jeeprenegade/jeeprenegade.component';
import { JeeprubiconComponent } from './modelos/jeeprubicon/jeeprubicon.component';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule
  ],

  /*exports: [
    HomeComponent,
    InformacionComponent,
    JeepcherokeelimitedComponent,
    JeeprenegadeComponent,
    JeeprubiconComponent,
  ]*/
})
export class PaginasModule { }
