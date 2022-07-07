import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carouselcuatro } from 'src/app/modelos/carousel/carousel4';


@Injectable({
  providedIn: 'root'
})
export class CarouselServicecuatro {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get<any>('assets/control_info/infoControlcuatro.json')
    .toPromise()
    .then(res => <Carouselcuatro[]>res.data)
    .then(data => { return data; });
}
}