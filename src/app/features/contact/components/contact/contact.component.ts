import { HttpClient } from '@angular/common/http';
import { Component, signal, computed, OnInit } from '@angular/core';
import { catchError, delay, map, of, tap, throwError } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  message =
    'résumez ici en quelques mots votre projets, les compétences que vous rechercher pour le mener à bien ainsi que les dates que vous aimeriez réserver.';
  email: string = '';
  selectedDate = this.stateService.datesSelection;
  fetchState = signal('');
  constructor(
    private stateService: StateService,
    private apiService: ApiService
  ) {}
  ngOnInit(): void {
    if (this.selectedDate().length > 0) {
      this.message = `Bonjour je souhaiterais réserver vos services pour les dates suivantes: ${this.selectedDate()}. Voici en grandes lignes le projete que je souhaiterais réaliser: `;
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
          tap((res) => {
            this.fetchState.set(res);
          }),
          delay(6000), // Met le délai après avoir défini l'état
          tap(() => {
            this.fetchState.set(''); // Remet l'état à une chaîne vide après le délai
            this.message = 'envoyer un autre message ?';
            this.email = ';';
          }),
          catchError((err) => {
            this.fetchState.set(
              `Désolé une erreur technique est survenu, envoyez moi un mail directement`
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
