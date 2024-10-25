import {
  AfterViewInit,
  Component,
  computed,
  effect,
  ElementRef,
  Input,
  Renderer2,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { concatMap, from, map, Observable, of, take, tap } from 'rxjs';
import { ProgressiveDisplayService } from 'src/app/shared/services/progressive-display.service';

@Component({
  selector: 'app-message-displayer',
  templateUrl: './message-displayer.component.html',
  styleUrls: ['./message-displayer.component.scss'],
})
export class MessageDisplayerComponent {
  @ViewChild('messageContainer') messageContainer!: ElementRef;
  @Input({ required: true }) messageInput = signal('');
  messageEmit = computed(() =>
    this.msgRenderer(this.messageInput().split(' '))
  );
  constructor(
    private messageDisplayerService: ProgressiveDisplayService,
    private renderer: Renderer2
  ) {}
  msgRenderer(msg: string[]): void {
    // Transformer le tableau de mots en Observable
    from(msg)
      .pipe(
        // Traiter chaque mot de manière séquentielle pour garantir l'ordre
        concatMap((word) => {
          console.log('Mot reçu = ' + word);
          // Création d'un conteneur pour chaque mot
          const wordContainer = this.renderer.createElement('span');
          this.renderer.appendChild(
            this.messageContainer.nativeElement,
            wordContainer
          );
          // Injecter chaque lettre du mot en utilisant le flux de `progressiveMessage$`
          return this.messageDisplayerService.progressiveMessage$(word).pipe(
            map((letter) => {
              console.log('Lettre reçue : ' + letter);
              const letterElement = this.renderer.createElement('span');
              const letterText = this.renderer.createText(letter);
              this.renderer.appendChild(letterElement, letterText);
              this.renderer.addClass(letterElement, 'animated-letter');
              // Ajouter chaque lettre au conteneur du mot pour préserver l'ordre des lettres
              this.renderer.appendChild(wordContainer, letterElement);
            })
          );
        }),
        take(msg.length)
      )
      .subscribe(() => {
        // Ajout d'un espace après chaque mot
        const spaceContainer = this.renderer.createElement('span');
        const spaceText = this.renderer.createText(' ');
        this.renderer.setStyle(spaceContainer, 'white-space', 'pre');
        this.renderer.appendChild(spaceContainer, spaceText);
        spaceContainer.this.renderer.appendChild(
          this.messageContainer.nativeElement,
          spaceContainer
        );
      });
  }
  closeMsg() {
    this.messageInput.set('');
  }
}
