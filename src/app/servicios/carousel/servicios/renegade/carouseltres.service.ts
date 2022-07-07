import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carouseltres } from 'src/app/modelos/carousel/carousel3';


@Injectable({
  providedIn: 'root'
})
export class CarouselServicetres {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get<any>('assets/control_info/infoControltres.json')
    .toPromise()
    .then(res => <Carouseltres[]>res.data)
    .then(data => { return data; });
}
}