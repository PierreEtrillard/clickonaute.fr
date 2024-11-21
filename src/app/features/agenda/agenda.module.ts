import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AgendaComponent } from './components/agenda.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AgendaRoutingModule } from './agenda-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SharedModule } from "../../shared/shared.module";
registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({ declarations: [AgendaComponent, CalendarComponent],
    exports: [AgendaComponent], imports: [CommonModule, AgendaRoutingModule, FullCalendarModule, SharedModule], providers: [
        { provide: LOCALE_ID, useValue: 'fr-FR' },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AgendaModule {}
