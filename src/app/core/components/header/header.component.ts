import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectionSelService } from '../../services/section-sel.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  hideHeader$= new BehaviorSubject<boolean>(false)
  @HostListener('document:scroll', ['$event'])
  onScroll(e:Event) {
    // this.hideHeader$.next(true)
    console.log(this.getYPosition(e));
    
  }
  constructor(
    private router: Router,
    private sectionSelService: SectionSelService
  ) {}

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }
  onTheTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.hideHeader$.next(false)
  }
  retourAccueil() {
    this.sectionSelService.sectionSwitcher('accueil');
    this.router.navigateByUrl('accueil');
  }
}
