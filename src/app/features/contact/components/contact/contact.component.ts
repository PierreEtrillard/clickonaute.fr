import { Component, signal, computed, OnInit } from '@angular/core';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  message = 'redigez en quelque mot votre projet, les dates de';
  email!: string;
  selectedDate: never[] = this.stateService.datesSelection();
  constructor(private stateService: StateService) {}
  ngOnInit(): void {
    if (this.selectedDate.length > 0) {
      this.message = `Bonjour je souhaiterais réserver vos services pour les dates suivantes: ${this.selectedDate}`;
    }
  }
  sendMessage(form: any) {
    if (form.valid) {
      alert('envoi de ' + this.message + ' en provenance de: ' + this.email);
    } else {
      alert('form.invalid ? : ' + form.invalid);
    }
  }
}
