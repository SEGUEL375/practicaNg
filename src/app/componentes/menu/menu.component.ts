import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  constructor() {
 
  }
 
  ngOnInit(): void {


    this.items = [
      { 
        label:'Inicio',
        icon:'pi pi-home',
        routerLink:"/",
        },
      {
        label:'Productos',
          styleClass:"",
          icon:'',
          routerLink:"/productos",
      },
      {
        label:'Modelos',
        icon:'pi pi-fw pi-car',
          items:[
              {
                  label:'Jeep Rubicon',
                  icon:'pi pi-car',
                  routerLink:"/jeep rubicon",
              },
             
              {
                separator:true
              },
              {
                  label:'Jeep Renegade',
                  icon:'pi pi-car',
                  routerLink:"/jeep renegade"
              },

               {
                separator:true
              }, 

              {
                label:'Jeep Cherokee Limited',
                icon:'pi pi-car',
                routerLink:"/jeep cherokee limited",
              }, 
             
             
          ]
      },
      {
          label:'Iniciar Sesion',
          icon:'pi pi-user',
          routerLink:"/informacion"
      },
  ];
     
}


}
