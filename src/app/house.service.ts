import { Injectable } from '@angular/core';
import { HOUSES } from './mock-houses';
import { House } from './house';
import { Observable, delay, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private housesUrl = 'api/houses';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.housesUrl)
      .pipe(tap(_ => this.log('fetched houses')));
  }

  getHouse(id: number): Observable<House> {
    const url = `${this.housesUrl}/${id}`;
    return this.http.get<House>(url)
      .pipe(tap(_ => this.log(`fetched house id=${id}`)));
  }

  updateHouse(house: House): Observable<any> {
    return this.http.put(this.housesUrl, house, this.httpOptions)
      .pipe(tap(_ => `updated house id=${house.id}`));
  }

  addHouse(house: House): Observable<House> {
    return this.http.post<House>(this.housesUrl, house, this.httpOptions)
      .pipe(tap((newHouse: House) => this.log(`added house w/ id=${newHouse.id}`)));
  }

  deleteHouse(id: number): Observable<House> {
    const url = `${this.housesUrl}/${id}`;
    return this.http.delete<House>(url, this.httpOptions)
      .pipe(tap(_ => this.log(`deleted house id=${id}`)));
  }

  private log(message: string) {
    this.messageService.add(`HouseService: ${message}`);
  }
}
