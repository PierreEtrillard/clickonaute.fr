import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectionSelService } from '../../services/section-sel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router:Router, private sectionSelService:SectionSelService){}

retourAccueil(){
  this.sectionSelService.sectionSwitcher("accueil")
  this.router.navigateByUrl("accueil")
}}
