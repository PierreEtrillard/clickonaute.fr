import { Component, computed, OnInit, signal } from '@angular/core';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit{
 selectedDates  = this.stateService.datesSelection
 price = this.stateService.price
 tjm = this.stateService.tjm
messageToDisplay=signal("Je travaille en présentiel sur les secteurs de Dinan - St Malo - St Brieuc ou à distance");
  constructor(private stateService:StateService){}
  ngOnInit(): void {
      this.selectedDates.set([])
      this.price.set(0)
  }
}
