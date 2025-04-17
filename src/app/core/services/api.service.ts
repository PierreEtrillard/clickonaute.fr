import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap, tap } from 'rxjs';
import { Disponibility } from 'src/app/features/agenda/disponibility.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiUrl
  constructor(private http: HttpClient) {}
  unavailabilities$ = this.http.get<Date[]>(`${this.apiUrl}/periods/indispos`);
  getBadge(senderName: string) {
    return this.http.post(`${this.apiUrl}/auth/badge`, senderName , {
      responseType: 'text',
      withCredentials: true// récupére le cookie de connexion);
      })   
  }
  sendMail(message: any) {
    return this.getBadge(message.sender).pipe(
      switchMap(() => {
        return this.http.post(`${this.apiUrl}/message`, message, {
          headers: new HttpHeaders({}),
          responseType: 'text',
          withCredentials: true// ajoute le cookie de connexion
        })
      })
    );
  }
}
