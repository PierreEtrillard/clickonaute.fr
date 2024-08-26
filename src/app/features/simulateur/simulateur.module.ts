import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { SimulateurComponent } from './components/simulateur/simulateur.component';
import { SimulateurRoutingModule } from './simulateur-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './components/result/result.component';
import { QuoteService } from './services/quote.service';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProgressiveDisplayService } from 'src/app/shared/services/progressive-display.service';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({
  declarations: [SimulateurComponent, ResultComponent],
  imports: [
    CommonModule,
    SimulateurRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    QuoteService,
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    ProgressiveDisplayService,
  ],
})
export class SimulateurModule {}
