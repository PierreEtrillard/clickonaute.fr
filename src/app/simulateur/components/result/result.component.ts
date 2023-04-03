import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { __values } from 'tslib';
import { prestation, Quote } from '../../quote.model';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit, OnDestroy{
  @Input() formValues: any;
  quote!: prestation[];
  @Output() backToSimulator$ = new EventEmitter<number>()

  constructor(private quoteService:QuoteService, ) { }
  ngOnInit() {
   
    this.quote = this.quoteService.quoteBuilder(this.formValues);
  }
  ngOnDestroy(){
     
  }
  reinitializer(){
    this.quote = []
    this.backToSimulator$.emit(1)
  }
}
