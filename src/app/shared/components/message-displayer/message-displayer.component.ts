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
  BehaviorSubject,
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
export class MessageDisplayerComponent {
  @Input({ required: true }) messageInput!: WritableSignal<string>;
  messageEmit = computed(()=> this.messageInput().split(' '));
  
  constructor(
    private messageDisplayerService: ProgressiveDisplayService,
  ) {
  }
  messageDisplayer(word: string):Observable<string> {
    console.log('word= ' + word);

  return this.messageDisplayerService
      .progressiveMessage$(word)
  
  }
  closeMsg() {
    this.messageInput.set('');
  }
}
