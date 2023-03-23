import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccueilComponent } from 'src/app/accueil/components/accueil/accueil.component';
import { SectionSelService } from '../../services/section-sel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
 
  constructor(private router:Router, private sectionSelService:SectionSelService){}
  ngOnInit(): void {
    
  }
retourAccueil(){
  // this.sectionSelService.sectionSwitcher("accueil")
  this.router.navigateByUrl("accueil")
}}
