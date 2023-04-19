import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-what-cookies',
  templateUrl: './what-cookies.component.html',
  styleUrls: ['./what-cookies.component.scss'],
})
export class WhatCookiesComponent implements OnInit{
  informations: Navigator = navigator;
  position!: GeolocationCoordinates;
  date$!:Observable<string> 
  myText!: string;
  showPostion$ = new BehaviorSubject<boolean>(false);
  showDirection$ = new BehaviorSubject<boolean>(false);
  showDatas$ = new BehaviorSubject<boolean>(false);
  savedCookie = false
  ngOnInit(): void {
    this.date$ = interval(1000).pipe(map(()=> new Date().toLocaleString('fr')))
    if (document.cookie.includes("text")){
      this.myText = document.cookie.split("=")[1]
      this.savedCookie = true
    }
    console.log(document.cookie);    
  }
  askPosition() {
    navigator.geolocation.getCurrentPosition((positionFromNav) => {
      this.position = positionFromNav.coords;
      this.showPostion$.next(true);
      if (this.position.speed) {
        this.showDirection$.next(true);
      }
    });
  }
  saveMyData() {
    document.cookie = `text=${this.myText}; max-age= 86400`
  }
  reloadPage() {
    window.location.reload();
  }
  deleteCookie(){
    document.cookie = `text=suprimed cookie; max-age= 0`;
    window.location.reload();
  }
}
