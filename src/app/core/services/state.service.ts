import { computed, Injectable, signal } from '@angular/core';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  sectionSelected = signal('loading');
  landingPageVisited = signal(false);
  lastPage = signal('accueil');
  datesSelection = signal([]);

  datesFormated = computed(() => {
    return this.datesSelection().map((date) =>
      format(date, 'EEEE dd MMMM yyyy', { locale: fr })
    );
  });
  price = signal(0);
  tjm = 340

  sectionSwitcher(sectionName: string) {
    this.sectionSelected.set(sectionName);
  }
}
