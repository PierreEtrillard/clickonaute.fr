import {
  Component,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import { addDays, startOfDay, endOfMonth, parseISO, format } from 'date-fns';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { StateService } from 'src/app/core/services/state.service';
import { AgendaService } from '../../services/agenda.service';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent; // Permet de manipuler le calendrier
  callendarReady=signal(false);
  availableDates$: Observable<string[]> = this.agendaService.getDates();
  availableDates: string[] = [];
  selectedDates: WritableSignal<Date[]> = this.appState.datesSelection;
  calendarOptions: CalendarOptions = {
    locale: frLocale,
    validRange: {
      start: this.agendaService.startDate,
      end: this.agendaService.endDate,
    },
    weekends: false,
    initialView: 'dayGridMonth', // e au mois
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true, // Permet la sélection  dates
    selectOverlap: (event) => !!event, // Permet de sélectionner uniquement les dates ayant des événements
    longPressDelay: 200, // tps en ms de maintien du click ou du touché sur une date avant le déclaenchement de l'event
    select: (selectInfo) => this.handleDateSelect(selectInfo),
    // unselect: () => this.resetSelection(),
    displayEventTime: false, // Masque complètement l'heure dans l'affichage des événements
  };
  constructor(
    private agendaService: AgendaService,
    private appState: StateService
  ) {}
  //    INITIALIZATION DU CALENDRIER AVEC LES DISPONIBILITE
  // Génère des événements pour tous les jours du lundi au vendredi pour les n semaines à venir
  ngOnInit(): void {
    this.generateWeekdayEvents(); // Génère toutes mes dates de dispo pour les n semaines à venir
    this.resetSelection();
  }
  generateWeekdayEvents() {
    this.availableDates$
      .pipe(
        map((dates) => {
          dates.forEach((date) =>
            this.calendarComponent.getApi().addEvent({
              title: 'disponible',
              start: date,
              backgroundColor: 'aqua',
              textColor: 'black',
            })
          );
          // Mise à jour des événements dans le calendrier
          this.availableDates = dates;
          this.calendarComponent.getApi().render()
        }),
        catchError((error: Error) => {
          console.error(error.message);
          return of(
            "Désolé, une erreur technique empêche l'accession à mes dates de disponibilité, merci de me contacter directement"
          );
        })
        ,
        delay(2000),
        tap(()=>this.callendarReady.set(true))
      )
      .subscribe();
  }
  handleDateSelect(selectInfo: DateSelectArg) {
    const selectedDatesRange = this.getDateRangeArray(
      selectInfo.start,
      selectInfo.end
    );
    const selectedDates = selectedDatesRange.filter((date) =>
      this.availableDates.some(
        (dateDispo) => dateDispo === format(date, 'yyyy-MM-dd')
      )
    );

    this.selectedDates.set(selectedDates);
    selectedDates.length >= 10
      ? this.appState.price.set(selectedDates.length * 300)
      : this.appState.price.set(selectedDates.length * 320);
  }
  // Méthode pour générer un tableau de toutes les dates entre deux dates
  getDateRangeArray(start: Date, end: Date): Date[] {
    const dateArray: Date[] = [];
    let currentDate = start;
    while (currentDate < end) {
      dateArray.push(currentDate);
      currentDate = addDays(currentDate, 1); // Passer au jour suivant
    }
    return dateArray;
  }
  resetSelection() {
    // this.currentSelection.view.calendar.unselect(); //deselection des dates
    this.appState.datesSelection.set([]);
    this.appState.price.set(0);
  }
}
