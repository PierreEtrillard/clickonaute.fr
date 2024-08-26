import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: frLocale,
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true, // Permet la sélection
    select: this.handleDateSelect.bind(this),
    events: [
      { title: 'Event 1', date: '2024-08-22', color: 'red' },
      { title: 'Event 2', date: '2024-08-23', color: 'blue' }
    ]
  };
    handleDateSelect(selectInfo: any) {
      const startDate = selectInfo.startStr;
      const endDate = selectInfo.endStr;
  
      alert(`Selected range: ${startDate} to ${endDate}`);
      // selectInfo.view.unselect(); // Annule la sélection après traitement
    }
}
