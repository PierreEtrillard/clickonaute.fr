import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  messageToDisplay = signal(
    'Je ne vais pas vous raconter mon enfance heureuse dans la campagne de Vannes, ce serait joyeux mais un peu long. Vous préférez sans doute connaître quelques-uns des principaux projets qui illustrent mon parcours...'
  );
}
