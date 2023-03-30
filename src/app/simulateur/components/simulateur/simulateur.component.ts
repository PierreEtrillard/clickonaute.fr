import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

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
  formFillStep$= new BehaviorSubject<number>(1)
  
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.initControlers();
    this.initGraphicalAspectsForm();
    this.initScaleForm();
    this.initFeaturesForm();
    this.initEstimatorForm();
  }
  // initialisation du form parent
  private initEstimatorForm() {
    this.estimatorForm = this.formBuilder.group({
      grapĥicalAspects: this.grapĥicalAspectsForm,
      scale: this.scaleForm,
      features: this.featuresForm,
    });
  }
  // initialisation des sections enfants
  private initGraphicalAspectsForm() {
    this.grapĥicalAspectsForm = this.formBuilder.group({
      maquette: this.maquetteCtrl,
      colors: this.colorCtrl,
      police: this.policeCtrl,
    });
  }
  private initScaleForm() {
    this.scaleForm = this.formBuilder.group({
      type: this.typeCtrl,
      hebergement: this.hebergementCtrl,
      pages: this.pagesCtrl,
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
    this.maquetteCtrl = this.formBuilder.control('',Validators.required);
    this.colorCtrl = this.formBuilder.control('');
    this.policeCtrl = this.formBuilder.control('');
    this.typeCtrl = this.formBuilder.control('',Validators.required);
    this.pagesCtrl = this.formBuilder.control('1',Validators.required);
    this.payOnlineCtrl = this.formBuilder.control('');
    this.locationCtrl = this.formBuilder.control('');
    this.cookiesCtrl = this.formBuilder.control('');
    this.accountCtrl = this.formBuilder.control('');
    this.otherCtrl = this.formBuilder.control('');
  }
  stepNav(step:number){
    this.formFillStep$.next(step)
  }
  result() {
    if (this.estimatorForm.valid){    console.table(this.estimatorForm.value);}
    else{
      console.error("form invalid");
    }

  }
}
