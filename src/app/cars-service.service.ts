import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICar } from './ICar';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "http://localhost:3000";

  public allCars(): Observable<ICar[]> {
    return this.http.get<ICar[]>(`${this.baseUrl}/cars`);
  }

  public findCar(id: number) {
    return this.http.get<ICar>(`${this.baseUrl}/cars/${id}`)
  }

  public findCarByBrand(brand: string) {
    return this.http.get<ICar>(`${this.baseUrl}/cars?brand=${brand}`)
  }

  public addCar(car: ICar) {
    return this.http.post(`${this.baseUrl}/cars`, car);
  }

  public removeCar(id: number) {
    return this.http.delete(`${this.baseUrl}/cars/${id}`);
  }

  public refactorCar(car: ICar) {
    return this.http.put(`${this.baseUrl}/cars`, car);
  }
}
