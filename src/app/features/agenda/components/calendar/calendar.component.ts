import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { CalendarOptions, DateSelectArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import { addDays, startOfDay, endOfMonth, parseISO, format } from 'date-fns';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/core/services/state.service';
import { AgendaService } from '../../services/agenda.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{

  myDispos: any[] = [];
  weeksRange: number = 52;
  startDate = new Date();
  endDate = endOfMonth(addDays(this.startDate, 7 * this.weeksRange)); // 7j * n semaines à partir d'aujourd'hui
  year = '2025';
  unavailableDates = [
    `${this.year}-01-01`, // Jour de l'An
    `${this.year}-05-01`, // Fête du Travail
    `${this.year}-05-08`, // Victoire 1945
    `${this.year}-07-14`, // Fête nationale
    `${this.year}-08-15`, // Assomption
    `2024-09-12`, // Vaccances
    `2024-09-25`, // Vaccances
    `2024-09-26`, // Vaccances
    `2024-09-27`, // Vaccances
    `2024-09-28`, // Vaccances
    `2024-09-29`, // Vaccances
    `2024-09-30`, // Vaccances
    `2024-10-01`, // Vaccances
    `2024-10-02`, // Vaccances
    `2024-10-03`, // Vaccances
    `2024-10-04`, // Vaccances
    `2024-10-05`, // Vaccances
    `2024-10-06`, // Vaccances
    `2024-10-07`, // Vaccances
    `2024-10-08`, // Vaccances
    `2024-10-09`, // Vaccances
    `2024-10-10`, // Vaccances
    `2024-10-11`, // Vaccances
    `2024-10-12`, // Vaccances
    `2024-10-13`, // Vaccances
    `2024-10-14`, // Vaccances
    `2024-10-15`, // Vaccances
    `${this.year}-11-01`, // Toussaint
    `${this.year}-11-11`, // Armistice 1918
    `${this.year}-12-25`, // Noël
  ];

  selectedDates: WritableSignal<string[]> = this.appState.datesSelection;
  currentSelection!: DateSelectArg;
  calendarOptions: CalendarOptions = {
    locale: frLocale,
    validRange: {
      start: this.startDate,
      end: this.endDate,
    },
    events: this.myDispos,
    weekends: false,
    initialView: 'dayGridMonth', // vue au mois
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true, // Permet la sélection  dates
    selectOverlap: (event) => !!event, // Permet de sélectionner uniquement les dates ayant des événements
    longPressDelay: 200, // tps en ms de maintien du click ou du touché sur une date avant le déclaenchement de l'event
    select: (selectInfo) => this.handleDateSelect(selectInfo),
    // unselect: () => this.resetSelection(),
    displayEventTime: false, // Masque complètement l'heure dans l'affichage des événements
  };
  datesOnDb$: Observable<Date[]> = this.agendaService.getUnavailableDates();
  constructor(
    private agendaService: AgendaService,
    private appState: StateService
  ) {
    this.generateWeekdayEvents(); // Génère toutes mes dates de dispo pour les n semaines à venir
  }
  //    INITIALIZATION DU CALENDRIER AVEC LES DISPONIBILITE
  // Génère des événements pour tous les jours du lundi au vendredi pour les n semaines à venir
  ngOnInit(): void {
      this.resetSelection()
  }
  generateWeekdayEvents() {
    for (
      let _date = this.startDate;
      _date <= this.endDate;
      _date = addDays(_date, 1)
    ) {
      const dayOfWeek = _date.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        // Exclure les week-ends
        this.myDispos.push({
          title: 'disponible',
          start: format(_date, 'yyyy-MM-dd'),
          backgroundColor: 'aqua',
          textColor: 'black',
        });
      }
    }
    this.removeUnavailableDates(this.unavailableDates);
  }
  // Supprimer les événements correspondant à une liste de dates
  removeUnavailableDates(datesToRemove: string[]) {
    this.datesOnDb$.subscribe(
      (res) => console.table(res),
      (err) => console.error(err)
    );

    // Itérer sur chaque date à supprimer
    datesToRemove.forEach((dateToRemove) => {
      this.myDispos = this.myDispos.filter((event) => {
        // Compare les dates sans prendre en compte l'heure
        return (
          startOfDay(parseISO(event.start)).toISOString() !==
          startOfDay(parseISO(dateToRemove)).toISOString()
        );
      });
    });

    // Mise à jour des événements dans le calendrier
    this.calendarOptions.events = this.myDispos;
  }
  handleDateSelect(selectInfo: DateSelectArg) {
    this.currentSelection = selectInfo;
    const selectedDatesRange = this.getDateRangeArray(
      selectInfo.start,
      selectInfo.end
    );
    const selectedDates = selectedDatesRange.filter((date) =>
      this.myDispos.some((dateDispo) => dateDispo.start === date)
    );
    this.selectedDates.set(selectedDates);
    selectedDates.length >= 10
      ? this.appState.price.set(selectedDates.length * 300)
      : this.appState.price.set(selectedDates.length * 320);
  }
  // Méthode pour générer un tableau de toutes les dates entre deux dates
  getDateRangeArray(start: Date, end: Date): string[] {
    const dateArray: string[] = [];
    let currentDate = start;
    while (currentDate < end) {
      dateArray.push(format(currentDate, 'yyyy-MM-dd'));
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
