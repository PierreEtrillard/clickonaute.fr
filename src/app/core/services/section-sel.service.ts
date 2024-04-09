import { EventEmitter, Injectable, Input, Output, signal } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SectionSelService {

// private _sectionSelected$= new BehaviorSubject<string>("page")
sectionSelected = signal("loading")


sectionSwitcher(sectionName: string) {
    this.sectionSelected.set(sectionName);
  }
}
