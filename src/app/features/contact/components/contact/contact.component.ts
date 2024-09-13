import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  message!: string;
  email!: string;
  sendMessage(form: any) {
    if (form.valid) {
      alert('envoi de ' + this.message + ' en provenance de: ' + this.email);
    } else {
      alert('form.invalid ? : ' + form.invalid);
    }
  }
}
