import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of, switchMap } from 'rxjs';
import { addDays, startOfDay, endOfMonth, parseISO, format } from 'date-fns';
import { Disponibility } from '../disponibility.model';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  weeksRange: number = 52;
  startDate = new Date();
  endDate = endOfMonth(addDays(this.startDate, 7 * this.weeksRange)); // 7j * n semaines à partir d'aujourd'hui
  constructor(private apiService: ApiService) {}
  
  getDates(): Observable<string[]> {
    const dateArray: string[] = [];
    return this.apiService.availabilities$.pipe(
      switchMap((dispo) => {
        
        const unavailableDates:string[]=[];
        // 1 récupérer toutes les dates d'indisponibilitées
        dispo.unavailable_periodes.forEach((indispo)=>{
          for (let _date = new Date(indispo.start);
          _date <= new Date(indispo.stop);
          _date = addDays(_date, 1)){
            unavailableDates.push(format(_date, 'yyyy-MM-dd'))
          }
        })
        // 2 création du tableau de toutes mes dates de disponibilitées
        dispo.available_periodes.forEach((periode) => {
          for (
            let _date = new Date(periode.start);
            _date <= new Date(periode.stop);
            _date = addDays(_date, 1)
          ) {
            const dayOfWeek = _date.getDay();
            // Exclure les week-ends & les jours indisponibles
            if (dayOfWeek !== 0 && dayOfWeek !== 6 && !unavailableDates.includes(format(_date, 'yyyy-MM-dd'))) {
              // Injecter le jour disponible dans l'array
              dateArray.push(format(_date, 'yyyy-MM-dd'));
            }
          }
        });
        return of(dateArray);
      })
    );
  }
}
