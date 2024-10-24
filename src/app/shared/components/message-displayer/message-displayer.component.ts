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
import { map, Observable, of, tap } from 'rxjs';
import { ProgressiveDisplayService } from 'src/app/shared/services/progressive-display.service';

@Component({
  selector: 'app-message-displayer',
  templateUrl: './message-displayer.component.html',
  styleUrls: ['./message-displayer.component.scss'],
})
export class MessageDisplayerComponent {
  @ViewChild('messageContainer') messageContainer!: ElementRef;
  @Input({required:true}) messageInput=signal('');
 messageEmit= computed(()=>this.msgRenderer(this.messageInput()))
  constructor(
    private messageDisplayerService: ProgressiveDisplayService,
    private renderer: Renderer2
  ) {
  }
  msgRenderer(msg:string): void {
    this.messageDisplayerService.progressiveMessage$(msg)
    .pipe(
        map((letter) => {
        console.log('lettre reçu: ' + letter);
        const divElement = this.renderer.createElement('div');
        let divLetter = this.renderer.createText(letter);
        // Appliquer le style white-space pour préserver les espaces
        this.renderer.setStyle(divElement, 'white-space', 'pre');
        this.renderer.appendChild(divElement, divLetter);
        this.renderer.addClass(divElement, 'animated-letter');
        // Ajouter la lettre au container
        return this.renderer.appendChild(
            this.messageContainer.nativeElement,
            divElement
          );
        })
    ).subscribe();
  }
  closeMsg() {
    this.messageInput.set('');
  }
}