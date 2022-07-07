import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carouseldos } from 'src/app/modelos/carousel/carousel2';


@Injectable({
  providedIn: 'root'
})
export class CarouselServicedos {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get<any>('assets/control_info/infoControldos.json')
    .toPromise()
    .then(res => <Carouseldos[]>res.data)
    .then(data => { return data; });
}
}