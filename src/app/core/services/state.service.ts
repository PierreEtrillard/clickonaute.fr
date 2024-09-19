import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {

sectionSelected = signal("loading")
landingPageVisited = signal(false)
datesSelection = signal([])
price = signal(0)

sectionSwitcher(sectionName: string) {
    this.sectionSelected.set(sectionName);
  }
}
