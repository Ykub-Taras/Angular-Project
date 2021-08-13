import { Component, OnInit } from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {ICarModels} from "../../models/ICar-models";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
cars:ICarModels[]
  formCar: FormGroup = new FormGroup({model: new FormControl(''),
  price: new FormControl(''),
  year: new FormControl(''),
      });


  constructor(private carsService:CarsService) {
    this.carsService.getAllCars().subscribe(value => this.cars=value)
  }

  ngOnInit(): void {

  }

}
