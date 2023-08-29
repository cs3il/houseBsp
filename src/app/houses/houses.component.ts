import { Component } from '@angular/core';
import { House } from '../house';
import { HOUSES } from '../mock-houses';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent {
  houses: House[] = [];

  selectedHouse?: House;

  constructor(private houseService: HouseService) {}

  ngOnInit() {
    this.getHouses();
  }

  getHouses(): void {
    this.houses = this.houseService.getHouses();
  }

  onSelect(house: House) {
    this.selectedHouse = house;
  }
}
