import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SectionSelService {

private _sectionSelected$= new BehaviorSubject<string>("accueil")

get sectionSelected(): Observable<string>
{
  return this._sectionSelected$.asObservable()
}
sectionSwitcher(sectionName: string) {
    this._sectionSelected$.next(sectionName);
  }
}
