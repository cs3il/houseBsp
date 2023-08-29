import { Component } from '@angular/core';
import { House } from '../house';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent {

  house: House = {
    id: 1,
    name: 'Villa',
    owned: true
  }
}
