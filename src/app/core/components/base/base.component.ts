import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit{
selectedSection:string = "header"
  constructor(){}
  ngOnInit(): void {
    this.selectedSection='accueil'
  }
  sectionSelector(sectionName:string){
    this.selectedSection=sectionName
  }
}
