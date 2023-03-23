import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SectionSelService } from 'src/app/core/services/section-sel.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  selectedSection$!:Observable<string>;
  constructor(private sectionSelService: SectionSelService) {}
  ngOnInit(): void {
    this.sectionSelService.sectionSwitcher("accueil");
    this.selectedSection$ = this.sectionSelService.sectionChange;
  }  
  sectionSelector(sectionName: string) {
    this.sectionSelService.sectionSwitcher(sectionName);
  }
}
