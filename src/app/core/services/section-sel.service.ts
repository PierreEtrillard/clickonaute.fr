import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SectionSelService {

sectionSelected = signal("loading")
landingPageVisited = signal(false)

sectionSwitcher(sectionName: string) {
    this.sectionSelected.set(sectionName);
  }
}
