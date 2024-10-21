import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { map, take, timer } from 'rxjs';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  selectedSection!: WritableSignal<string>;
  introductionMessage = signal('');
  constructor(
    private sectionSelService: StateService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.selectedSection = this.sectionSelService.sectionSelected;

      if (!this.sectionSelService.landingPageVisited()) {
        timer(2000)
        .pipe(
          map(() => {
            this.introductionMessage.set(
              "Bonjour et bienvenue à bord ! Je suis Pierre, développeur fullstack freelance. Toujours partant pour propulser vos projets ! Contactez-moi et discutons de vos besoins. Bonne navigation !!!"
            );
            this.sectionSelService.landingPageVisited.set(true);
          }),
          take(1)
        )
        .subscribe();

      timer(20000)
      .pipe(
        map(() => this.introductionMessage.set('')),
        take(1)
      )
      .subscribe();
    }
  }
  menuCloser(){
    this.sectionSelService.sectionSwitcher(this.sectionSelService.lastPage());
    this.router.navigateByUrl(this.sectionSelService.lastPage());
  }
  sectionSelector(sectionName: string) {
    this.sectionSelService.sectionSwitcher(sectionName);
    if(this.sectionSelService.sectionSelected()!== 'menu'){this.sectionSelService.lastPage.set(sectionName)}
    this.router.navigateByUrl(sectionName)
  }
  consultAgenda() {
    this.sectionSelService.sectionSwitcher('agenda');
    this.router.navigateByUrl('agenda');
  }
}
