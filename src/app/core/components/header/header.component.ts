import { Component, HostListener, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { map, take, timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hideHeader = signal(false);
  revealTakeOfBtn = signal(false);
  isLoading = signal(true);
  takeOff = signal(false);

  @HostListener('document:scroll')
  onScroll() {
    window.scrollY > window.innerHeight * 0.1
      ? this.hideHeader.set(true)
      : this.hideHeader.set(false);

    window.scrollY > document.body.scrollHeight * 0.4 &&
    window.scrollY > window.innerHeight * 1.2
      ? this.revealTakeOfBtn.set(true)
      : this.revealTakeOfBtn.set(false);
  }
  constructor(
    private router: Router,
    private sectionSelService: StateService
  ) {}
  ngOnInit(): void {
    timer(1500)
      .pipe(map(() => {this.isLoading.set(false);
        this.sectionSelService.sectionSwitcher('accueil')
      }),take(1))
      .subscribe();
  }

  menuOpener() {    
    this.router.navigateByUrl('');
    this.sectionSelService.sectionSwitcher('menu');
  }
  onTheTop() {
    this.takeOff.set(true);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    timer(1000)
      .pipe(
        map(() => this.takeOff.set(false)),
        take(1)
      )
      .subscribe();
  }
  retourAccueil() {
    this.sectionSelService.sectionSwitcher('accueil');
    this.router.navigateByUrl('accueil');
  }
}
