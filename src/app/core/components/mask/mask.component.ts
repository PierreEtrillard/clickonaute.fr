import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SectionSelService } from '../../services/section-sel.service';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss'],
})
export class MaskComponent {
  selectedSection$!: Observable<string>;
  constructor(private sectionSelService: SectionSelService) {}
  ngOnInit(): void {
    this.selectedSection$ = this.sectionSelService.sectionSelected
    this.selectedSection$
      .pipe(
        tap((section) => console.log(`Sélection de la section: '${section}'`))
      )
      .subscribe();
  }
}
