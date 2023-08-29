import { Injectable } from '@angular/core';
import { HOUSES } from './mock-houses';
import { House } from './house';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor() { }

  getHouses(): Observable<House[]> {
    const houses = of(HOUSES);
    return houses;
  }
}
