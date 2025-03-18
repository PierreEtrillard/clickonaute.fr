import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Disponibility } from 'src/app/features/agenda/disponibility.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiUrl
  constructor(private http: HttpClient) {}
  unavailabilities$ = this.http.get<Date[]>(`${this.apiUrl}/periods/indispos`);
  sendMail(formData: FormData) {
    return this.http.post(`${this.apiUrl}/message`, formData, {
      headers: new HttpHeaders({}),
      responseType: 'text', 
    });
  }
}
