import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  quote!: prestation[]

  constructor(private quoteService:QuoteService) { }
  ngOnInit() {
   
    this.quote = this.quoteService.quoteBuilder(this.formValues);
  }
  ngOnDestroy(){
     this.quote = []
  }
}
