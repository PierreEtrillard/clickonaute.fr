import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AgendaComponent } from './components/agenda.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { HttpClientModule } from '@angular/common/http';
import { AgendaRoutingModule } from './agenda-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({
  declarations: [AgendaComponent, CalendarComponent],
  imports: [CommonModule,AgendaRoutingModule, FullCalendarModule,HttpClientModule],
  exports: [AgendaComponent],
  providers:[
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ]
})
export class AgendaModule {}
