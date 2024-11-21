import { Component, signal, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, delay, of, tap } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @ViewChild('messangerForm') form!: NgForm
  message =
    'Résumez ici en quelques mots votre projet, les compétences que vous recherchez pour le mener à bien ainsi que les dates que vous aimeriez réserver.';
  email: string = '';
  selectedDate = this.stateService.datesFormated;
  fetchState = signal('');
  constructor(
    private stateService: StateService,
    private apiService: ApiService
  ) {}
  ngOnInit(): void {
    if (this.selectedDate().length > 0) {
      this.message = `Bonjour je souhaiterais réserver vos services pour les dates suivantes: ${this.selectedDate()}. Voici en grandes lignes le projet que je souhaiterais réaliser: `;
    }
  }
  sendMessage(form: any) {
    if (form.valid) {
      const formData = new FormData();
      formData.set('from', this.email);
      formData.set('message', this.message);
      this.apiService
        .sendMail(formData)
        .pipe(
          tap((res:string) => {
            this.fetchState.set(res);
          }),
          delay(6000), // Met le délai après avoir défini l'état
          tap(() => {
            this.fetchState.set(''); // Remet l'état à une chaîne vide après le délai
            this.form.reset();
            this.message = 'Envoyer un autre message ?';
            this.email = '';
          }),
          catchError((err) => {
            this.fetchState.set(
              `Désolé une erreur technique est survenue, envoyez-moi un mail directement`
            ); // Définit l'état à l'erreur
            return of(err).pipe(
              delay(9000), // Ajoute un délai avant de réinitialiser l'état
              tap(() => this.fetchState.set('')) // Réinitialise l'état après le délai
            );
          })
        )
        .subscribe();
    } else {
      alert('form.invalid ? : ' + form.invalid);
    }
  }
}
