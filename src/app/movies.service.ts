import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http:Http) { }
public getJSON(): Observable<any>{
  return this.http.get("./assets/Json/movies.json");

}
}
