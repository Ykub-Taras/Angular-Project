import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICarModels} from "../models/ICar-models";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private url = 'http://195.72.146.25/api/v1/cars'

  constructor(private httpClient:HttpClient) { }

  getAllCars(): Observable<ICarModels[]> {
    return this.httpClient.get<ICarModels[]>(this.url)
  }
}

