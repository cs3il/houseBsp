import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { House } from './house';
@Injectable({
 providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
 createDb() {
 const houses: House[] = [
 { id: 1, name: 'Villa', owned: true },
 { id: 2, name: 'Mansion', owned: true },
 { id: 3, name: 'Ranch', owned: false },
 { id: 4, name: 'Tower', owned: false },
 { id: 5, name: 'Bungalow', owned: true },
 { id: 6, name: 'Castle', owned: false },
 { id: 7, name: 'Palace', owned: true },
 { id: 8, name: 'Cottage', owned: true },
 { id: 9, name: 'Hut', owned: false }
 ];
 return { houses };
 }
genId(houses: House[]): number {
 return houses.length > 0 ? Math.max(...houses.map(house => house.id)) + 1 : 1;
 }
}