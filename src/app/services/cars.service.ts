import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICarModel} from "../models/ICar-models";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private url = 'http://195.72.146.25/api/v1/cars'

  constructor(private httpClient: HttpClient) {
  }

  getAllCars(): Observable<ICarModel[]> {
    return this.httpClient.get<ICarModel[]>(this.url)
  }

  setCar(car: ICarModel): Observable<ICarModel> {
    return this.httpClient.post<ICarModel>(this.url, car)
  }

}
