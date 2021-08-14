import { Component, OnInit } from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {ICarModel} from "../../models/ICar-models";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
cars:ICarModel[];
  model= new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]);
  price= new FormControl('',[Validators.required, Validators.min(0)]);
  year= new FormControl('', [Validators.required, Validators.min(1990), Validators.max(2021)]);

  formCar: FormGroup = new FormGroup({
    model:this.model,
    price:this.price,
    year:this.year
  });


  constructor(private carsService:CarsService) {
    this.carsService.getAllCars().subscribe(value => this.cars=value)
  }

  ngOnInit(): void {

  }

   submitPost(): void {
      this.carsService.setCar(this.formCar.getRawValue())
        .subscribe(value => this.cars = [...this.cars, value]);
     this.formCar.reset()
    }
}
