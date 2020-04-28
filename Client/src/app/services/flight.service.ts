import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../models/flight.model';
import { Flight1 } from '../models/Airline.model';
@Injectable({
  providedIn: 'root'
})
export class FlightService {
  baseUrl: string = "http://localhost:3000/flights";


  baseUrl2: string = "http://localhost:9092/searchFlight";

  constructor(private http: HttpClient) { }

  getAllFlights() {
    return this.http.get<Flight[]>(this.baseUrl);
  }

  getFlight(from:string,to:string){
    return this.http.get<Flight1[]>(`${this.baseUrl2}/${from}/${to}`);

  }
}
