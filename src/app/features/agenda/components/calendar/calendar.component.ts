import {
  AfterViewInit,
  Component,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import { addDays, format } from 'date-fns';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { StateService } from 'src/app/core/services/state.service';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: false,
})
export class CalendarComponent implements AfterViewInit {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent; // Manipulation du calendrier
  callendarReady = signal(false);
  calendarStatus = signal("chargement en cours  _ Veuillez patienter...")
  private now: Date = new Date(); 
  private endCalendar: Date = new Date(new Date().setMonth(this.now.getMonth() + 8));
  unavailableDates$: Observable<Date[]> = this.apiService.unavailabilities$;
  selectedDates: WritableSignal<Date[]> = this.appState.datesSelection;

  calendarOptions: CalendarOptions = {
    locale: frLocale,
    validRange: {
      start: this.now,
      end: this.endCalendar,
    },
    weekends: false,
    initialView: 'dayGridMonth', // Vue mensuelle
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true, // Permet la sélection des dates
    selectOverlap: (event) => !!event, // Sélection uniquement sur les dates avec événements
    longPressDelay: 200, // Temps de maintien avant déclenchement d'événement
    select: (selectInfo) => this.handleDateSelect(selectInfo),
    displayEventTime: false, // Masque l'heure dans les événements
  };

  constructor(
    private apiService: ApiService,
    private appState: StateService
  ) {}

  ngAfterViewInit(): void {
    this.generateEvents(); // Génère les disponibilités
    this.resetSelection();
  }

  // Génère des événements pour les jours de la semaine, sauf les indisponibilités
  generateEvents(): void {
    this.unavailableDates$.pipe(
      tap(unavailableDates=>{
        const currentDate = this.now; // Clone pour éviter les mutations
        while (currentDate < this.endCalendar ) {
          const isUnavailable = !unavailableDates.some((unavailableDate) => {
            const parsedDate = new Date(unavailableDate); // Conversion en objet Date
            return parsedDate.getDate() === currentDate.getDate(); // Comparaison des dates
          });
          if (isUnavailable){
              this.calendarComponent.getApi().addEvent({
              title: 'Disponible',
              start: new Date(currentDate), // Clone pour éviter les mutations
              backgroundColor: 'aqua',
              textColor: 'black',
            });
          }
          currentDate.setDate(currentDate.getDate() + 1); // Avancer d'un jour
        }
        }
      ),
      catchError(err=>{
        this.calendarStatus.set("Erreur technique calendrier indisponible...");
        return of(err.message)
      }),
      delay(2000),
      tap(()=>this.callendarReady.set(true))
    ).subscribe()
  }

  handleDateSelect(selectInfo: DateSelectArg): void {
    const selectedDatesRange = this.getDateRangeArray(
      selectInfo.start,
      selectInfo.end
    );
    // Logique de traitement des dates sélectionnées (désactivée pour l'instant)
  }

  // Génère un tableau de toutes les dates entre deux bornes
  getDateRangeArray(start: Date, end: Date): Date[] {
    const dateArray: Date[] = [];
    let currentDate = new Date(start); // Cloner pour éviter les mutations
    while (currentDate < end) {
      dateArray.push(new Date(currentDate));
      currentDate = addDays(currentDate, 1); // Avancer au jour suivant
    }
    return dateArray;
  }

  resetSelection(): void {
    // Réinitialise la sélection et les prix
    this.appState.datesSelection.set([]);
    this.appState.price.set(0);
  }
}
