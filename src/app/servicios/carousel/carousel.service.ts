import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carousel } from 'src/app/modelos/carousel/carousel';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get<any>('assets/control_info/infoControl.json')
    .toPromise()
    .then(res => <Carousel[]>res.data)
    .then(data => { return data; });
}
}
