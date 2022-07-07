import {  NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {GalleriaModule} from 'primeng/galleria';

//firebase
import {AngularFireModule} from '@angular/fire/compat';  
import { environment } from 'src/environments/environment';
import {AngularFireAuthModule} from '@angular/fire/compat/auth'; 


//componentes
import { AppComponent } from './app.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { HomeComponent } from './paginas/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';

import { InformacionComponent } from './paginas/quienes somos/informacion.component';
import { JeepcherokeelimitedComponent } from './paginas/modelos/jeepcherokeelimited/jeepcherokeelimited.component';
import { JeeprenegadeComponent } from './paginas/modelos/jeeprenegade/jeeprenegade.component';
import { JeeprubiconComponent } from './paginas/modelos/jeeprubicon/jeeprubicon.component'; 

//modulos
import { AppRoutingModule } from './app-routing.module';
import {ToastModule} from 'primeng/toast';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CarouselService } from './servicios/carousel/carousel.service';
import { InputTextModule } from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ImageModule} from 'primeng/image'; 
import {HttpClientModule} from '@angular/common/http';
import { ProductosComponent } from './paginas/productos/todo/productos.component';
import { LoginComponent } from './auth/login/login.component';
import { CarouselServicedos } from './servicios/carousel/servicios/cherokee/carouseldos.service';
import { CarouseldosComponent } from './componentes/carousel/carouseldos/carouseldos.component';
import { CarouseltresComponent } from './componentes/carousel/carouseltres/carouseltres.component';
import { CarouselcuatroComponent } from './componentes/carousel/carouselcuatro/carouselcuatro.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouseldosComponent,
    CarouseltresComponent,
    CarouselcuatroComponent,
    


    HomeComponent,
    MenuComponent,
   
    InformacionComponent,
    JeepcherokeelimitedComponent,
    JeeprenegadeComponent,
    JeeprubiconComponent,
    ProductosComponent,
    LoginComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    CarouselModule,
    ButtonModule,
    ToastModule, 
    FormsModule, 
    InputTextModule, 
    ImageModule,
    ReactiveFormsModule,
    HttpClientModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    GalleriaModule,
    
   
   
],
  
  providers: [
    CarouselService,
    CarouselServicedos
  ],
  
  bootstrap: [AppComponent],
  schemas: [
   
],
})
export class AppModule {} 


