import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SectionSelService {

@Input() sectionChange: EventEmitter<string> = new EventEmitter();

  sectionSwitcher(sectionName: string) {
    this.sectionChange.emit(sectionName);
  }
}
