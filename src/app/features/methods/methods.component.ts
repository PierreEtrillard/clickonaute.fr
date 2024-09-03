import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent {
messageToDisplay=signal("Independant mais pas solitaire, j'intégre facilement une équipe de développement web pour des projet de toute tailles");

}
