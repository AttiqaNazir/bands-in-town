import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // search artist
  searchArtist(name):Observable<any>{
    return this.http.get<any>(`/api/artists/${name}?app_id=abc`);

  }

  // get all events from the backend/DB of the searched artist
  getEvent(name):Observable<any>{
    return this.http.get<any>(`https://rest.bandsintown.com/artists/${name}/events?app_id=abc`);
    
  }
}
