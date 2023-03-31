import { state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Component({
  selector: 'app-simulateur',
  templateUrl: './simulateur.component.html',
  styleUrls: ['./simulateur.component.scss'],
})
export class SimulateurComponent implements OnInit {
  estimatorForm!: FormGroup;
  scaleForm!: FormGroup;
  grapĥicalAspectsForm!: FormGroup;
  featuresForm!: FormGroup;
  payOnlineCtrl!: FormControl;
  locationCtrl!: FormControl;
  cookiesCtrl!: FormControl;
  accountCtrl!: FormControl;
  otherCtrl!: FormControl;
  maquetteCtrl!: FormControl;
  policeCtrl!: FormControl;
  colorCtrl!: FormControl;
  typeCtrl!: FormControl;
  hebergementCtrl!: FormControl;
  pagesCtrl!: FormControl;
  formFillStep$ = new BehaviorSubject<number>(1);
  isSection1filled$!: Observable<boolean>;
  isSection2filled$!: Observable<boolean>;
  isSection3filled$!: Observable<boolean>;
  isAllfilled$!: Observable<boolean>;
  @Input()result!: any;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.initControlers();
    this.initGraphicalAspectsForm();
    this.initScaleForm();
    this.initFeaturesForm();
    this.initEstimatorForm();
    this.initFilledSectionObserver();
  }
  // initialisation du form parent
  private initEstimatorForm() {
    this.estimatorForm = this.formBuilder.group({
      scale: this.scaleForm,
      grapĥicalAspects: this.grapĥicalAspectsForm,
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
  private initGraphicalAspectsForm() {
    this.grapĥicalAspectsForm = this.formBuilder.group({
      maquette: this.maquetteCtrl,
      colors: this.colorCtrl,
      police: this.policeCtrl,
    });
  }
  private initFeaturesForm() {
    this.featuresForm = this.formBuilder.group({
      payOnline: this.payOnlineCtrl,
      location: this.locationCtrl,
      cookies: this.cookiesCtrl,
      account: this.accountCtrl,
      other: this.otherCtrl,
    });
  }
  // initialisation des controllers
  initControlers() {
    this.typeCtrl = this.formBuilder.control("", Validators.required);
    this.hebergementCtrl = this.formBuilder.control(false, Validators.required);
    this.pagesCtrl = this.formBuilder.control(1, Validators.required);
    this.maquetteCtrl = this.formBuilder.control("", Validators.required);
    this.colorCtrl = this.formBuilder.control(false);
    this.policeCtrl = this.formBuilder.control(false);
    this.payOnlineCtrl = this.formBuilder.control(false);
    this.locationCtrl = this.formBuilder.control(false);
    this.cookiesCtrl = this.formBuilder.control(false);
    this.accountCtrl = this.formBuilder.control(false);
    this.otherCtrl = this.formBuilder.control(false);
  }
  initFilledSectionObserver() {
    this.isSection1filled$ = this.scaleForm.statusChanges.pipe(
      map((status) => status === 'VALID')
    );
    this.isSection2filled$ = this.grapĥicalAspectsForm.statusChanges.pipe(
      map((status) => status === 'VALID')
    );
    this.isSection3filled$ = this.featuresForm.statusChanges.pipe(
      map((status) => status === 'VALID')
    );
    this.isAllfilled$ = this.estimatorForm.statusChanges.pipe(
      map((status) => status === 'VALID')
    );
  }
  stepNav(step: number) {
      this.formFillStep$.next(step);
  }
  resultBuilder() {
    if (this.estimatorForm.valid) {
      this.formFillStep$.next(4);
      this.result=this.estimatorForm.value;
    } else {
      console.error('form invalid');
    }
  }
}
