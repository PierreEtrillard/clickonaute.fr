import { Component, computed, Input, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgressiveDisplayService } from 'src/app/shared/services/progressive-display.service';

@Component({
  selector: 'app-message-displayer',
  templateUrl: './message-displayer.component.html',
  styleUrls: ['./message-displayer.component.scss'],
})
export class MessageDisplayerComponent {
  @Input()
  message = signal("");
  messageEmit = computed(()=>
  this.messageDisplayerService.progressiveMessage$(
    this.message()
  ));
  constructor(private messageDisplayerService: ProgressiveDisplayService) {}
}
