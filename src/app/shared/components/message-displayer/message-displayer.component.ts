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
    // creation d'un array contenant les index des lettres à diffusé dans la vue
    const _indexArray: number[] = [];
    wordArray.forEach((word, wordIndex) => {
      for (let index = 0; index < word.length; index++) {
        _indexArray.push(wordIndex * 10 + index);
      }
    });
    // mis à jour du signal déclanchant l'injection des lettres dans la vue
    let counter = 0;
    interval(30)
      .pipe(
        tap((n) => {
          this.letterCounter.set(_indexArray[counter]);
          counter++;
        }),
        take(_indexArray.length)
      )
      .subscribe();
  }
  closeMsg() {
    this.popUpOpen.set(false);
  }
}
