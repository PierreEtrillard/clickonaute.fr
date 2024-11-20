import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Disponibility } from 'src/app/features/agenda/disponibility.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  availabilities$ = this.http.get<Disponibility>('assets/dates.json');
  sendMail(formData: FormData) {
    return this.http.post('/api/mail_sender.php', formData, {
      headers: new HttpHeaders({}),
      responseType: 'text', 
    });
  }
}
