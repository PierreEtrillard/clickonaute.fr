import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  messageToDisplay = signal(
    ' Depuis tout petit, construire, dessiner et créer sont pour moi des moyens d’expression et de stimulation importants. Aujourd’hui le développement est un terrain de jeu qui me permet de satisfaire ces besoins.'
  );
}
