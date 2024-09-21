import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  sendMail(formData: FormData) {
    return this.http.post('/api/mail_sender.php', formData, {
      headers: new HttpHeaders({}),
      responseType: 'text', 
    });
  }
}
