import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './houses/houses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';

const routes: Routes = [
  {path: 'houses', component: HousesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HouseDetailComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
