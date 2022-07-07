import { Component, OnInit } from '@angular/core';
import { Carouseltres } from 'src/app/modelos/carousel/carousel3';
import { CarouselServicetres } from 'src/app/servicios/carousel/servicios/renegade/carouseltres.service';

@Component({
  selector: 'app-carouseltres',
  templateUrl: './carouseltres.component.html',
  styleUrls: ['./carouseltres.component.css']
})
export class CarouseltresComponent implements OnInit {

 
  carouseltres: Carouseltres[] = [];


  constructor(private carouselServicetres:CarouselServicetres) { 

  }

  ngOnInit(): void {
    this.carouselServicetres.getInfo().then((carouseltres: Carouseltres[]) => {
      this.carouseltres = carouseltres;
		});
  }

}
