import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http:HttpClient) { }
  getUnavailableDates(){
    return this.http.get<Date[]>('api/server.php')
    } 
  }
