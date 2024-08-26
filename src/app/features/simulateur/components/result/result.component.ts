import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { __values } from 'tslib';
import { prestation } from '../../quote.model';
import { QuoteService } from '../../services/quote.service';
import { Observable, from, interval, map, scan, take } from 'rxjs';
import { ProgressiveDisplayService } from 'src/app/shared/services/progressive-display.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() formValues: any;
  quote!: prestation[];
  message: string =
    ' La simulation suivante ne constitue pas un devis officiel, merci de me contacter pour une estimation plus précise de votre projet';
    progressiveMessage$!: Observable<string>;
  @Output() backToSimulator$ = new EventEmitter<number>();

  constructor(
    private quoteService: QuoteService,
    private progressiveDisplayService: ProgressiveDisplayService
  ) {}
  ngOnInit() {
    this.progressiveMessage$ =
      this.progressiveDisplayService.progressiveMessage$(this.message);
    this.quote = this.quoteService.quoteBuilder(this.formValues);
  }
  reinitializer() {
    this.backToSimulator$.emit(1);
  }
}
