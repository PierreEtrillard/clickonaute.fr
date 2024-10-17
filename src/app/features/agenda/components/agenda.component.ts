import { Component, computed, OnInit } from '@angular/core';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit{
 selectedDates  = this.stateService.datesSelection
 price = this.stateService.price
  constructor(private stateService:StateService){}
  ngOnInit(): void {
      this.selectedDates.set([])
      this.price.set(0)
  }
}
