import { Component, OnInit } from '@angular/core';
import {
  Observable,
  debounce,
  delay,
  from,
  interval,
  map,
  of,
  take,
  tap,
  timer,
} from 'rxjs';
import { SectionSelService } from 'src/app/core/services/section-sel.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  selectedSection$!: Observable<string>;
  testMessage: string = ' le message que je veux afficher';
  // obsMessage: Observable<string> = from(this.testMessage);
  obsMessage: Observable<string> = of('un', 'deux', 'cent Mille quarante');
  arrayMessage: string[] = [...this.testMessage];
  constructor(private sectionSelService: SectionSelService) {}
  ngOnInit(): void {
    this.selectedSection$ = this.sectionSelService.sectionSelected;
  
    this.obsMessage.pipe();
  }

  sectionSelector(sectionName: string) {
    this.sectionSelService.sectionSwitcher(sectionName);
  }
}
