import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-cookies',
  templateUrl: './what-cookies.component.html',
  styleUrls: ['./what-cookies.component.scss']
})
export class WhatCookiesComponent implements OnInit{
  informations = navigator;
  connection = this.informations.canShare
  ngOnInit(): void {
    console.log(navigator)
    
  }
}
