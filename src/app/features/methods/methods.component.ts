import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-methods',
    templateUrl: './methods.component.html',
    styleUrls: ['./methods.component.scss'],
    standalone: false
})
export class MethodsComponent {
messageToDisplay=signal("Indépendant mais pas solitaire, j'intègre facilement une équipe de développement web pour des projets de toutes tailles.");

}
