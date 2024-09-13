import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-sim-btn',
  templateUrl: './sim-btn.component.html',
  styleUrls: ['./sim-btn.component.scss']
})
export class SimBtnComponent {
  selectedSection!:string;

  constructor(private sectionSelService: StateService, private router:Router) {}
  ngOnInit(): void {
    this.selectedSection = this.sectionSelService.sectionSelected()
  }  
  goToSimulator(sectionName: string) {
    this.sectionSelService.sectionSwitcher(sectionName);
    this.router.navigateByUrl('/simulateur')
  }
}
