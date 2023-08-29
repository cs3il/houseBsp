import { Component } from '@angular/core';
import { House } from '../house';
import { HOUSES } from '../mock-houses';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent {
  houses = HOUSES;

  selectedHouse?: House;

  onSelect(house: House) {
    this.selectedHouse = house;
  }
}
