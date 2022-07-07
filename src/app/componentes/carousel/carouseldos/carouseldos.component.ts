import { Component, OnInit } from '@angular/core';
import { Carouseldos } from 'src/app/modelos/carousel/carousel2';

import {  CarouselServicedos } from 'src/app/servicios/carousel/servicios/cherokee/carouseldos.service';


@Component({
  selector: 'app-carouseldos',
  templateUrl: './carouseldos.component.html',
  styleUrls: ['./carouseldos.component.css']
})
export class CarouseldosComponent implements OnInit {


 
  carouseldos: Carouseldos[] = [];


  constructor(private carouselServicedos:CarouselServicedos) { 

  }

  ngOnInit(): void {
    this.carouselServicedos.getInfo().then((carouseldos: Carouseldos[]) => {
      this.carouseldos = carouseldos;
		});
  }

}
