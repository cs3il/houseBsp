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

  private log(message: string) {
    this.messageService.add(`HouseService: ${message}`);
  }
}
