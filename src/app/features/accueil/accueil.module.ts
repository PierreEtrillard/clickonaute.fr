import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './components/accueil.component';
import { AccueilRoutingModule } from './accueil-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProgressiveDisplayService } from 'src/app/shared/services/progressive-display.service';

@NgModule({
  declarations: [AccueilComponent],
  imports: [CommonModule, AccueilRoutingModule, SharedModule],
  exports: [AccueilComponent],
  providers: [ProgressiveDisplayService],
})
export class AccueilModule {}
