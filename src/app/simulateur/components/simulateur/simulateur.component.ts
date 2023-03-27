import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
  pagesCtrl!: FormControl;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.initControlers();
    this.initGraphicalAspectsForm();
    this.initScaleForm();
    this.initFeaturesForm();
    this.initEstimatorForm();
  }
  private initEstimatorForm() {
    this.estimatorForm = this.formBuilder.group({
      grapĥicalAspects: this.grapĥicalAspectsForm,
      scale: this.scaleForm,
      features: this.featuresForm,
    });
  }
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
  initControlers() {
    this.maquetteCtrl = this.formBuilder.control('');
    this.colorCtrl = this.formBuilder.control('');
    this.policeCtrl = this.formBuilder.control('');
    this.typeCtrl = this.formBuilder.control('');
    this.pagesCtrl = this.formBuilder.control('1');
    this.payOnlineCtrl = this.formBuilder.control('');
    this.locationCtrl = this.formBuilder.control('');
    this.cookiesCtrl = this.formBuilder.control('');
    this.accountCtrl = this.formBuilder.control('');
    this.otherCtrl = this.formBuilder.control('');
  }

  result() {
    console.table(this.estimatorForm.value);
  }
}
