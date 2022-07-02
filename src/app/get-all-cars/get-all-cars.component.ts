import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarsService } from 'src/app/cars.service';
import { ICar } from 'src/app/ICar';

@Component({
  selector: 'app-get-all-cars',
  templateUrl: './get-all-cars.component.html',
  styleUrls: ['./get-all-cars.component.css']
})
export class GetAllCarsComponent implements OnInit {

  public response: Observable<ICar[]>;

  constructor(private service: CarsService) {
    this.response = this.service.allCars();
   }


  ngOnInit(): void {
  }

}
