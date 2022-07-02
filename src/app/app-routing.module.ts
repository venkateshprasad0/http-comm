import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { GetAllCarsComponent } from './get-all-cars/get-all-cars.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/cars' },
  { path: "cars", component: GetAllCarsComponent },
  { path: "add", component: AddCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
