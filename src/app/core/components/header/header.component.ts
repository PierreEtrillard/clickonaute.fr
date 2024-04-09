import { Component, HostListener, Input, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { SectionSelService } from '../../services/section-sel.service';
import { BehaviorSubject, Subject, map, timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hideHeader = signal(false);
  isLoading = signal(true);
  takeOff = signal(false);

  @HostListener('document:scroll', ['$event'])
  onScroll(e: Event) {
    window.scrollY > 60
      ? this.hideHeader.set(true)
      : this.hideHeader.set(false);
  }
  constructor(
    private router: Router,
    private sectionSelService: SectionSelService
  ) {}
  ngOnInit(): void {
    timer(1500).pipe(map(()=> this.isLoading.set(false))).subscribe()
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }
  onTheTop() {
    this.takeOff.set(true);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  retourAccueil() {
    this.sectionSelService.sectionSwitcher('accueil');
    this.router.navigateByUrl('accueil');
  }
}
