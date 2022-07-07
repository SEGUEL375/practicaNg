import { Component, OnInit } from '@angular/core';
import { Carouselcuatro } from 'src/app/modelos/carousel/carousel4';
import { CarouselServicecuatro } from 'src/app/servicios/carousel/servicios/rubicon/carouselcuatro.service';



@Component({
  selector: 'app-carouselcuatro',
  templateUrl: './carouselcuatro.component.html',
  styleUrls: ['./carouselcuatro.component.css']
})
export class CarouselcuatroComponent implements OnInit {
  carouselcuatro: Carouselcuatro[] = [];

  


  constructor(private carouselServicecuatro:CarouselServicecuatro) { 

  }

  ngOnInit(): void {
    this.carouselServicecuatro.getInfo().then((carouselcuatro: Carouselcuatro[]) => {
      this.carouselcuatro = carouselcuatro;
		});
  }

}
