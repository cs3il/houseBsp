import { Component } from '@angular/core';
import { House } from '../house';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  houses: House[] = [];

  constructor(private houseService: HouseService) {
    this.getHouses()
  }

  getHouses(): void {
    this.houseService.getHouses()
      .subscribe(houses => this.houses = houses.slice(0, 4))
  }
}
