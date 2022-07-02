import { Component, OnInit } from '@angular/core';
import { Car } from '../Cars';
import { CarsService } from '../cars.service';
import { ICar } from '../ICar';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  public car!: Car;

  constructor(private service: CarsService) {
  }

  ngOnInit(): void {
    this.car = new Car({ id: "", brand: "", model: "", year: "", type: "" });
  }

  add() {
    this.service.addCar(this.car);
  }


}
