import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { InformacionComponent } from './paginas/quienes somos/informacion.component';

import { JeepcherokeelimitedComponent } from './paginas/modelos/jeepcherokeelimited/jeepcherokeelimited.component';
import { JeeprenegadeComponent } from './paginas/modelos/jeeprenegade/jeeprenegade.component'; 
import { JeeprubiconComponent } from './paginas/modelos/jeeprubicon/jeeprubicon.component';
import { ProductosComponent } from './paginas/productos/todo/productos.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"productos", component:ProductosComponent},
  {path:"informacion", component:InformacionComponent},
  {path:"jeep cherokee limited", component:JeepcherokeelimitedComponent},
  {path:"jeep renegade", component:JeeprenegadeComponent},
  {path:"jeep rubicon", component:JeeprubiconComponent},
  {path:"login", component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
