import { AfterViewInit, Component, HostListener, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import { addDays, startOfDay, endOfMonth, parseISO, format } from 'date-fns';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements AfterViewInit{
  @ViewChild('calendar') calendar!: FullCalendarComponent;
  ngAfterViewInit(): void {
    let xEnterPosition:number= 0;
    let xOutPosition:number
    const calendarRef = document.getElementById('calendarContenair');
    calendarRef?.addEventListener('touchstart',(e)=>{xEnterPosition=e.changedTouches[0].screenX;});
    calendarRef?.addEventListener('touchend',(e)=>{
      xOutPosition=e.changedTouches[0].screenX;
    xEnterPosition<xOutPosition?
    this.nextMounth():
    this.prevMounth()
    })
  }

  // hammer = new Hammer(this.calendarRef);
  myEvents: any[] = [];
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
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth', // vue au mois
    validRange: {
      start: this.startDate,
      end: this.endDate,
    },
    weekends: false,
    locale: frLocale,
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true, // Permet la sélection des dates
    select: this.handleDateSelect.bind(this),
    selectOverlap: (event) => !!event, // Permet de sélectionner uniquement les dates ayant des événements
    events: this.myEvents,
    displayEventTime: false, // Masque complètement l'heure dans l'affichage des événements
  };

  constructor() {
    this.generateWeekdayEvents(); // Génère toutes mes dates de dispo pour les n semaines à venir
  }
  //    INITIALIZATION DU CALENDRIER AVEC LES DISPONIBILITE
  // Génère des événements pour tous les jours du lundi au vendredi pour les n semaines à venir
  generateWeekdayEvents() {
    for (
      let _date = this.startDate;
      _date <= this.endDate;
      _date = addDays(_date, 1)
    ) {
      const dayOfWeek = _date.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        // Exclure les week-ends
        this.myEvents.push({
          title: 'disponible',
          start: format(_date, 'yyyy-MM-dd'),
          backgroundColor: 'aqua',
          textColor: 'black',
        });
      }
    }
    this.removeEventsByDates(this.unavailableDates);
    console.table(this.myEvents);
  }
  // Supprimer les événements correspondant à une liste de dates
  removeEventsByDates(datesToRemove: string[]) {
    // Itérer sur chaque date à supprimer
    datesToRemove.forEach((dateToRemove) => {
      this.myEvents = this.myEvents.filter((event) => {
        // Compare les dates sans prendre en compte l'heure
        return (
          startOfDay(parseISO(event.start)).toISOString() !==
          startOfDay(parseISO(dateToRemove)).toISOString()
        );
      });
    });

    // Mise à jour des événements dans le calendrier
    this.calendarOptions.events = this.myEvents;
  }
  //  EVENEMENT AU SWIPE GAUCHE ET DROITE
  
  nextMounth() {
    console.log('calendar swipeRight');
    this.calendar.getApi().next();
  }
  prevMounth() {
    console.log('calendar swipeLeft');
    this.calendar.getApi().prev();
  }
  handleDateSelect(selectInfo: DateSelectArg) {
    const selectedEvents = this.myEvents.filter(
      (event) =>
        event.start >= selectInfo.startStr && event.start < selectInfo.endStr
    );

    if (
      selectedEvents.length ===
      new Date(selectInfo.endStr).getDate() -
        new Date(selectInfo.startStr).getDate()
    ) {
      alert(`Selected range: ${selectInfo.startStr} to ${selectInfo.endStr}`);
    } else {
      alert(
        `Cannot select range: ${selectInfo.startStr} to ${selectInfo.endStr}`
      );
      selectInfo.view.calendar.unselect();
    }
  }
}
