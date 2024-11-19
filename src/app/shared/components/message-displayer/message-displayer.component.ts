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
import { toSignal } from '@angular/core/rxjs-interop';
import {
  concatMap,
  delay,
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
export class MessageDisplayerComponent {
  @ViewChild('messageContainer') messageContainer!: ElementRef;
  @Input({ required: true }) messageInput = signal('');
  wordArray = computed(() => this.messageInput().split(' '));
  letterCounter = signal(0);
  popUpOpen = signal(true);
  constructor() {
    effect(() => {
      this.lettersFlux(this.wordArray());
    });
  }
  lettersFlux(wordArray: string[]) {
    let wordIndex = 0;
    let letterIndex = 0;
    from(wordArray)
      .pipe(
        take(wordArray.length),
        concatMap((word) => {
          wordIndex++;
          // pour chaque emission de mot transforme celui-ci en flux observable
          return from(word).pipe(
            take(word.length),
            concatMap((letter) => {
              // pour chaque emission de lettre transforme celle-ci en flux observable
              return of(letter).pipe(
                delay(40),
                tap(() => {
                  letterIndex++;
                 this.letterCounter.set(wordIndex * 10 + letterIndex);
                })
              );
            })
          );
        })
      )
      .subscribe();
  }

  closeMsg() {
    this.popUpOpen.set(false)
  }
}
