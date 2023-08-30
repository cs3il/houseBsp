import { Component } from '@angular/core';
import { House } from '../house';
import { HOUSES } from '../mock-houses';
import { HouseService } from '../house.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent {
  houses: House[] = [];

  selectedHouse?: House;

  constructor(private houseService: HouseService, private messageService: MessageService) {}

  ngOnInit() {
    this.getHouses();
  }

  getHouses(): void {
    this.houseService.getHouses()
      .subscribe(houses => this.houses = houses);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {
      return;
    }
    this.houseService.addHouse({ name} as House)
      .subscribe(house => this.houses.push(house));
  }

  delete(houseTD: House): void {
    this.houses = this.houses.filter(house => house !== houseTD);
    this.houseService.deleteHouse(houseTD.id).subscribe();
  }

  /*
  onSelect(house: House) {
    this.selectedHouse = house;
    this.messageService.add(`HousesComponent: Selected house id=${house.id}`);
  }
  */
}
