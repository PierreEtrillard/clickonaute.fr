import { Component, OnInit, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.sectionSelService.sectionSwitcher('accueil');
  }

  sectionSelector(sectionName: string) {
    this.sectionSelService.sectionSwitcher(sectionName);
  }
}
