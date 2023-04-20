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
  takeOff$= new BehaviorSubject<boolean>(false)

  @HostListener('document:scroll', ['$event'])
  onScroll(e:Event) {
    (window.scrollY > 60 ) ?  this.hideHeader$.next(true):this.hideHeader$.next(false)
    
  }
  constructor(
    private router: Router,
    private sectionSelService: SectionSelService
  ) {}

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }
  onTheTop() {
    this.takeOff$.next(true)
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
