import { Component, OnInit } from '@angular/core';
import { Carousel } from '../../modelos/carousel/carousel';
import { CarouselService } from '../../servicios/carousel/carousel.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  carousel!: Carousel[];

  constructor(private carouselService:CarouselService) { 

  }

  ngOnInit(): void {
    this.carouselService.getInfo().then(carousel => {
			this.carousel = carousel;
		});
  }

}
