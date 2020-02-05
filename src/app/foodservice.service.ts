import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: Http) { }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/Json/hotels.json")
}
}
