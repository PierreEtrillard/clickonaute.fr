import { Component, OnInit, WritableSignal } from '@angular/core';
import { map, timer} from 'rxjs';
import { SectionSelService } from 'src/app/core/services/section-sel.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  selectedSection!: WritableSignal<string>;

  constructor(private sectionSelService: SectionSelService) {}
  ngOnInit(): void {
    this.selectedSection = this.sectionSelService.sectionSelected;
    timer(1500).pipe(map(()=> this.sectionSelService.sectionSwitcher('accueil'))).subscribe();
   
  }

  sectionSelector(sectionName: string) {
    this.sectionSelService.sectionSwitcher(sectionName);
  }
}
