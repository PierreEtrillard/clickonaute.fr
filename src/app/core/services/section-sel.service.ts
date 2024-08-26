import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SectionSelService {

sectionSelected = signal("loading")

sectionSwitcher(sectionName: string) {
    this.sectionSelected.set(sectionName);
  }
}
