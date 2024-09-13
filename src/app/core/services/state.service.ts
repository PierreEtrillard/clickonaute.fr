import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {

sectionSelected = signal("loading")
landingPageVisited = signal(false)
datesSelection = signal([])


sectionSwitcher(sectionName: string) {
    this.sectionSelected.set(sectionName);
  }
}
