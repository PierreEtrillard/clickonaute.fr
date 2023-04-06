import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Component({
  selector: 'app-what-cookies',
  templateUrl: './what-cookies.component.html',
  styleUrls: ['./what-cookies.component.scss'],
})
export class WhatCookiesComponent implements OnInit{
  informations: Navigator = navigator;
  position!: GeolocationCoordinates;
  date: string = new Date().toLocaleString('fr');
  myText!: string;
  showPostion$ = new BehaviorSubject<boolean>(false);
  showDirection$ = new BehaviorSubject<boolean>(false);
  showDatas$ = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    if (document.cookie.includes("text")){
      this.myText = document.cookie.split("=")[1]
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
    document.cookie = `text=${this.myText}`
  }
  reloadPage() {
    window.location.reload();
  }
}
