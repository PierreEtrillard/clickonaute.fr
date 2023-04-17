import { state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, map, Observable, of, take, tap } from 'rxjs';
import { ProgressiveDisplayService } from 'src/app/shared/services/progressive-display.service';

@Component({
  selector: 'app-simulateur',
  templateUrl: './simulateur.component.html',
  styleUrls: ['./simulateur.component.scss'],
})
export class SimulateurComponent implements OnInit {
  estimatorForm!: FormGroup;
  scaleForm!: FormGroup;
  graphicalsAspectsForm!: FormGroup;
  featuresForm!: FormGroup;
  typeCtrl!: FormControl;
  pagesCtrl!: FormControl;
  hebergementCtrl!: FormControl;
  maquetteCtrl!: FormControl;
  policeCtrl!: FormControl;
  picsCtrl!: FormControl;
  payOnlineCtrl!: FormControl;
  locationCtrl!: FormControl;
  cookiesCtrl!: FormControl;
  accountCtrl!: FormControl;
  noFeatureCtrl!: FormControl;
  otherCtrl!: FormControl;
  //surveillants de section valide
  formFillStep$ = new BehaviorSubject<number>(1);
  isSection1filled$!: Observable<boolean>;
  isSection2filled$!: Observable<boolean>;
  isSection3filled$!: Observable<boolean>;
  isAllfilled$!: Observable<boolean>;
  maxPageReached$!:Observable<boolean>;
  errorMessage: string = '';
  progressiveMessage$!: Observable<string>;
  //formData:
  result: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private progressiveDisplayService: ProgressiveDisplayService
  ) {}
  ngOnInit(): void {
    this.initControlers();
    this.initGraphicalsAspectsForm();
    this.initScaleForm();
    this.initFeaturesForm();
    this.initEstimatorForm();
    this.initFilledSectionObserver();
  }
  // initialisation du form parent
  private initEstimatorForm() {
    this.estimatorForm = this.formBuilder.group({
      scale: this.scaleForm,
      graphicalsAspects: this.graphicalsAspectsForm,
      features: this.featuresForm,
    });
  }
  // initialisation des sections enfants
  private initScaleForm() {
    this.scaleForm = this.formBuilder.group({
      type: this.typeCtrl,
      hebergement: this.hebergementCtrl,
      pages: this.pagesCtrl,
    });
  }
  private initGraphicalsAspectsForm() {
    this.graphicalsAspectsForm = this.formBuilder.group({
      maquette: this.maquetteCtrl,
      pics: this.picsCtrl,
      police: this.policeCtrl,
    });
  }
  private initFeaturesForm() {
    this.featuresForm = this.formBuilder.group({
      payOnline: this.payOnlineCtrl,
      location: this.locationCtrl,
      cookies: this.cookiesCtrl,
      account: this.accountCtrl,
      noFeature: this.noFeatureCtrl,
      other: this.otherCtrl,
    });
  }
  // initialisation des controllers
  initControlers() {
    this.typeCtrl = this.formBuilder.control('', Validators.required);
    this.hebergementCtrl = this.formBuilder.control('', Validators.required);
    this.pagesCtrl = this.formBuilder.control(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(50),
    ]);
    this.maquetteCtrl = this.formBuilder.control('', Validators.required);
    this.policeCtrl = this.formBuilder.control(true);
    this.picsCtrl = this.formBuilder.control(true);
    this.payOnlineCtrl = this.formBuilder.control(false);
    this.locationCtrl = this.formBuilder.control(false);
    this.cookiesCtrl = this.formBuilder.control(false);
    this.accountCtrl = this.formBuilder.control(false);
    this.noFeatureCtrl = this.formBuilder.control(false);
    this.otherCtrl = this.formBuilder.control(false);
  }
  initFilledSectionObserver() {
    this.isSection1filled$ = this.scaleForm.statusChanges.pipe(
      map((status) => status === 'VALID')
    );
    this.maxPageReached$ = this.pagesCtrl.statusChanges.pipe(
      map((status) => status === 'INVALID')
    );
    this.isSection2filled$ = this.graphicalsAspectsForm.statusChanges.pipe(
      map((status) => status === 'VALID')
    );
    this.isSection3filled$ = this.featuresForm.statusChanges.pipe(
      map((status) => status === 'VALID')
    );
    this.isAllfilled$ = this.estimatorForm.statusChanges.pipe(
      map((status) => status === 'VALID')
    );
  }
  noFeature() {
    this.featuresForm.reset();
    this.noFeatureCtrl.setValue(true);
  }
  noFeatureClosed() {
    this.noFeatureCtrl.setValue(false);
  }
  stepBackward(step: number) {
    this.formFillStep$.next(step);
    if (step == 1) {
      this.scaleForm.reset();
      this.pagesCtrl.setValue(1);
    }
    if (step == 2) {
      this.graphicalsAspectsForm.reset();
    }
    this.progressiveMessage$ =
      this.progressiveDisplayService.progressiveMessage$(
        `Sélectionnez vos nouveau choix avant de revenir à l'étape ${step + 1}`
      );
  }
  stepNav(step: number) {
    this.progressiveMessage$ = of();
    this.formFillStep$.next(step);
  }
  showUnFilled(section: number) {
    this.progressiveMessage$ =
      this.progressiveDisplayService.progressiveMessage$(
        `Finalisez l'étape ${section} avant de passer à la suivante `
      );
  }
  resultBuilder() {
    if (this.estimatorForm.valid) {
      this.result = this.estimatorForm.value;
      this.estimatorForm.reset();
      this.pagesCtrl.setValue(1);
      this.formFillStep$.next(4);
    } else {
      this.progressiveMessage$ =
        this.progressiveDisplayService.progressiveMessage$(
          "Merci de compléter toutes les étapes avant l'édition du devis"
        );
    }
  }
}
