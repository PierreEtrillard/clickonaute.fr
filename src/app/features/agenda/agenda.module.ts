import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './components/agenda.component';
import { AgendaRoutingModule } from './agenda-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [AgendaComponent],
  imports: [CommonModule,AgendaRoutingModule, FullCalendarModule],
  exports: [AgendaComponent],
})
export class AgendaModule {}
