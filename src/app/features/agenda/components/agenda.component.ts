import { Component } from '@angular/core';
import { CalendarOptions, DateSelectArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import { addDays, startOfDay, endOfMonth, parseISO } from 'date-fns';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent {
  myEvents: any[] = [];
  year = '2024';
  unavailableDates = [
    `${this.year}-01-01`, // Jour de l'An
    `${this.year}-05-01`, // Fête du Travail
    `${this.year}-05-08`, // Victoire 1945
    `${this.year}-07-14`, // Fête nationale
    `${this.year}-08-15`, // Assomption
    `${this.year}-09-25`, // Vaccances
    `${this.year}-09-26`, // Vaccances
    `${this.year}-09-27`, // Vaccances
    `${this.year}-09-28`, // Vaccances
    `${this.year}-09-29`, // Vaccances
    `${this.year}-09-30`, // Vaccances
    `${this.year}-10-01`, // Vaccances
    `${this.year}-10-02`, // Vaccances
    `${this.year}-10-03`, // Vaccances
    `${this.year}-10-04`, // Vaccances
    `${this.year}-10-05`, // Vaccances
    `${this.year}-10-06`, // Vaccances
    `${this.year}-10-07`, // Vaccances
    `${this.year}-10-08`, // Vaccances
    `${this.year}-10-09`, // Vaccances
    `${this.year}-10-10`, // Vaccances
    `${this.year}-10-11`, // Vaccances
    `${this.year}-10-12`, // Vaccances
    `${this.year}-10-13`, // Vaccances
    `${this.year}-10-14`, // Vaccances
    `${this.year}-10-15`, // Vaccances
    `${this.year}-11-01`, // Toussaint
    `${this.year}-11-11`, // Armistice 1918
    `${this.year}-12-25`, // Noël
  
  ];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth', // vue au mois
    locale: frLocale,
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true, // Permet la sélection des dates
    select: this.handleDateSelect.bind(this),
    selectOverlap: (event) => !!event, // Permet de sélectionner uniquement les dates ayant des événements
    events: this.myEvents,
    displayEventTime: false, // Masque complètement l'heure dans l'affichage des événements
  };

  constructor() {
    this.generateWeekdayEvents(52); // Génère toutes mes dates de dispo pour les n semaines à venir
  }

  // Génère des événements pour tous les jours du lundi au vendredi pour les n semaines à venir
  generateWeekdayEvents(semaines: number) {
    const startDate = new Date();
    const endDate = endOfMonth(addDays(startDate, 7 * semaines)); // 7j * n semaines à partir d'aujourd'hui

    for (let _date = startDate; _date <= endDate; _date = addDays(_date, 1)) {
      const dayOfWeek = _date.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        // Exclure les week-ends
        this.myEvents.push({
          title: 'dispo',
          start: startOfDay(_date).toISOString(),
        });
      }
    }
    this.removeEventsByDates(this.unavailableDates);
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

  handleDateSelect(selectInfo: DateSelectArg) {
    const selectedEvents = this.myEvents.filter(
      (event) =>
        event.start >= selectInfo.startStr && event.start < selectInfo.endStr
    );

    if (
      selectedEvents.length ===
      (new Date(selectInfo.endStr).getDate() -
        new Date(selectInfo.startStr).getDate())
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
