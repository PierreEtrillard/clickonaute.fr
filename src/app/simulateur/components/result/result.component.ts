import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { __values } from 'tslib';
import { prestation } from '../../quote.model';
import { QuoteService } from '../../services/quote.service';
import {
  Observable,
  concatMap,
  delay,
  from,
  of,
  scan,
} from 'rxjs';

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
    obsMessage$: Observable<string> = from(this.message);
    progressiveMessage$!: Observable<string>;
  @Output() backToSimulator$ = new EventEmitter<number>();

  constructor(private quoteService: QuoteService) {}
  ngOnInit() {
    this.progressiveMessage$ = this.obsMessage$.pipe(
      concatMap((letters) => of(letters).pipe(delay(20))),// concatMap attend que le flux obsMessages$ soit arrivé pour réémettre un flux Observable (of(letter)) comme ça je lui applique la methode delay()
      scan((aglomerat,letter)=>{
        return aglomerat+letter
      })
    );
    this.quote = []
    this.quote = this.quoteService.quoteBuilder(this.formValues);
  }
  reinitializer() {
    this.backToSimulator$.emit(1);
  }
}
