import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{
  selectedSection:string = "header"
  constructor(){}
  ngOnInit(): void {
    this.selectedSection='accueil'
  }
  sectionSelector(sectionName:string){
    this.selectedSection=sectionName
  }
}
