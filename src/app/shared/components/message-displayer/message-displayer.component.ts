import {
  Component,
  computed,
  effect,
  ElementRef,
  Input,
  Renderer2,
  signal,
  ViewChild,
} from '@angular/core';
import { concatMap, from, Observable, tap } from 'rxjs';
import { ProgressiveDisplayService } from 'src/app/shared/services/progressive-display.service';

@Component({
  selector: 'app-message-displayer',
  templateUrl: './message-displayer.component.html',
  styleUrls: ['./message-displayer.component.scss'],
})
export class MessageDisplayerComponent {
  @Input({ required: true }) messageInput = signal('');
  @ViewChild('messageContainer') messageContainer!: ElementRef;
  wordsArray = computed(() => this.messageInput().split(' '));
  wordsObs$!: Observable<string>;
  // message = toSignal(this.wordsObs$)
  nextDisplay = false;
  constructor(
    private renderer: Renderer2,
    private messageDisplayerService: ProgressiveDisplayService
  ) {
    effect(() => {
      this.wordsObs$ = this.messageStream(this.wordsArray());
      this.wordsObs$.subscribe();
    });
  }
  nextWord(displayed: boolean) {
    this.nextDisplay = displayed;
  }
  ngOnInit(): void {
    this.wordsObs$;
  }
  closeMsg() {
    this.messageInput.set('');
  }
  messageStream(words: string[]) {
    return from(words).pipe(
      concatMap((word) => {
        const wordWrapperElement = this.renderer.createElement('span');
        this.renderer.addClass(wordWrapperElement, 'word-wrapper');
        this.renderer.appendChild(
          this.messageContainer.nativeElement,
          wordWrapperElement
        );

        // Crée un observable pour chaque lettre du mot, en ajoutant un espace après chaque mot.
        return this.messageDisplayerService
          .progressiveMessage$(word + ' ')
          .pipe(
            tap((letter) => {
              // crée un element pour chaque lettre et injecte celui-ci au wordContainer
              const letterWrapperElement = this.renderer.createElement('span');
              const letterElement = this.renderer.createText(letter);
              this.renderer.appendChild(letterWrapperElement, letterElement);
              this.renderer.addClass(letterWrapperElement, 'animated-letter');

              this.renderer.appendChild(
                wordWrapperElement,
                letterWrapperElement
              );
            })
          );
      })
    );
  }
}
