import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  searchArtist(name):Observable<any>{

    return this.http.get<any>(`/api/artists/${name}?app_id=abc`);

  }
}
