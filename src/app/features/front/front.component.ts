import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent {
messageToDisplay=signal("Je conçois des applications web destinées aux entreprises et Angular est mon framework de prédilection. J'adore concevoir créer des interfaces réactives et responsives ainsi qu'implémenter des animations css modernes.");

}
