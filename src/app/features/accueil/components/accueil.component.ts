import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { map, take, timer } from 'rxjs';
import { SectionSelService } from 'src/app/core/services/section-sel.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  selectedSection!: WritableSignal<string>;
  introductionMessage = signal('');
  constructor(
    private sectionSelService: SectionSelService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.selectedSection = this.sectionSelService.sectionSelected;
    timer(1500)
    .pipe(
        map(() => {
          this.sectionSelService.sectionSwitcher('accueil');
          this.sectionSelService.landingPageVisited.set(true);
        }),
        take(1)
      )
      .subscribe();
      if (!this.sectionSelService.landingPageVisited()) {
        timer(2000)
        .pipe(
          map(() => {
            this.introductionMessage.set(
              "Bonjour et bienvenu à bord ! Je suis Pierre, développeur fullstack freelance. Toujours ouvert pour de nouveaux projet ! Consultez mes disponibilitées et n'hesitez surtout pas à me contacter pour en discuter. Bonne navigation !!!"
            );
            console.log('injection');
          }),
          take(1)
        )
        .subscribe();

      timer(15000)
      .pipe(
        map(() => this.introductionMessage.set('')),
        take(1)
      )
      .subscribe();
    }
  }
  sectionSelector(sectionName: string) {
    this.sectionSelService.sectionSwitcher(sectionName);
  }
  consultAgenda() {
    this.sectionSelService.sectionSwitcher('agenda');
    this.router.navigateByUrl('agenda');
  }
  closeMsg() {
    this.introductionMessage.set("");
  }
}
