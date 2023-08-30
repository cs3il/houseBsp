import { Injectable } from '@angular/core';
import { HOUSES } from './mock-houses';
import { House } from './house';
import { Observable, delay, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private messageService: MessageService) { }

  getHouses(): Observable<House[]> {
    const houses = of(HOUSES);
    this.messageService.add('HouseService: fetched houses')
    return houses;
  }
}
