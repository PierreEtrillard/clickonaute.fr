import {
  AfterViewInit,
  Component,
  computed,
  effect,
  ElementRef,
  Input,
  QueryList,
  Renderer2,
  Signal,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import {
  concatMap,
  from,
  interval,
  map,
  Observable,
  of,
  take,
  tap,
} from 'rxjs';
import { ProgressiveDisplayService } from 'src/app/shared/services/progressive-display.service';

@Component({
  selector: 'app-message-displayer',
  templateUrl: './message-displayer.component.html',
  styleUrls: ['./message-displayer.component.scss'],
})
export class MessageDisplayerComponent implements AfterViewInit {
  @ViewChild('wordContainer') wordContainers!: QueryList<ElementRef>;
  @Input({ required: true }) messageInput!: WritableSignal<string>;
  messageEmit = computed(() => this.messageInput().split(' '));

  constructor(
    private messageDisplayerService: ProgressiveDisplayService,
    private renderer: Renderer2
  ) {}
  ngAfterViewInit(): void {
    this.wordContainers.changes
      .pipe(
        take(this.wordContainers.length),
        map((wordContainers: QueryList<ElementRef>) => {
          wordContainers.forEach((wordContainer, index) => {
            console.log(index);
            const word = this.messageEmit()[index];
            this.messageDisplayer(word, wordContainer);
          });
        })
      )
      .subscribe();
  }

  messageDisplayer(word: string, wordContainer: ElementRef) {
    console.log('word= ' + word);

    this.messageDisplayerService
      .progressiveMessage$(word)
      .pipe(
        tap((letter) => {
          const spanElmt = this.renderer.createElement('span');
          const spanText = this.renderer.createText(letter);
          this.renderer.appendChild(spanElmt, spanText);
          this.renderer.addClass(spanElmt, 'animated-letter');
          return this.renderer.appendChild(
            wordContainer.nativeElement,
            spanElmt
          );
        })
      )
      .subscribe();
  }
  closeMsg() {
    this.messageInput.set('');
  }
}
