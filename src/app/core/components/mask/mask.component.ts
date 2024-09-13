import {
  Component,
  WritableSignal,
  signal,
} from '@angular/core';
import { map, interval, timer } from 'rxjs';
import { StateService } from '../../services/state.service';
import { SvgPath } from '../models/svgPath';
import { Coor } from '../models/Coor';
import { Curve } from '../models/Curve';
@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss'],
})
export class MaskComponent {
  middleGradient = signal(-50);
  selectedSection!: WritableSignal<string>;
  svgWidth: number = window.innerWidth;
  svgHeight: number = document.body.scrollHeight;
  initMaskFaqPoints!: SvgPath;
  initMaskHeaderPoints!: SvgPath;
  initMaskMenuPoints!: SvgPath;
  initMaskPagesPoints!: SvgPath;
  maskHeaderCoor!: string;
  maskMenuCoor!: string;
  maskFaqCoor!: string;
  maskPagesCoor!: string;

  constructor(private sectionSelService: StateService) {}
  ngOnInit(): void {
    this.selectedSection = this.sectionSelService.sectionSelected;
    this.loadingMaskPositions();
    timer(1500)
      .pipe(
        map(() => {
          this.maskModifier('menu');
          this.initMaskPositions();
        })
      )
      .subscribe();

    // animation des bordures de masques
    interval(20)
      .pipe(
        map(() => {
          if (this.middleGradient() <= 120) {
            this.middleGradient.set(this.middleGradient() + 1);
          }
          if (this.middleGradient() >= 120) {
            this.middleGradient.set(this.middleGradient() - 130);
          }
        })
      )
      .subscribe();
  }
  maskModifier(section: string) {
    section === 'loading'
      ? this.loadingMaskPositions()
      : this.initMaskPositions();
  }
  loadingMaskPositions() {
    this.initMaskHeaderPoints = new SvgPath(new Coor(0, 0), [
      new Curve(new Coor(this.svgWidth, 0), new Coor(this.svgWidth, 0)),
      new Curve(new Coor(0, this.svgHeight), new Coor(0, this.svgHeight)),
    ]);
    this.initMaskMenuPoints = new SvgPath(new Coor(this.svgWidth, 0), [
      new Curve(new Coor(0, this.svgHeight), new Coor(0, this.svgHeight)),
      new Curve(
        new Coor(this.svgWidth, this.svgHeight * 0.5),
        new Coor(this.svgWidth, this.svgHeight * 0.5)
      ),
    ]);
    this.initMaskFaqPoints = new SvgPath(
      new Coor(this.svgWidth, this.svgHeight),
      [
        new Curve(
          new Coor(this.svgWidth, this.svgHeight * 0.5),
          new Coor(this.svgWidth, this.svgHeight * 0.5)
        ),
        new Curve(
          new Coor(0, this.svgHeight),
          new Coor(this.svgWidth * 0, this.svgHeight * 1)
        ),
      ]
    );
    this.initMaskPagesPoints = new SvgPath(
      new Coor(this.svgWidth, this.svgHeight),
      [
        new Curve(
          new Coor(this.svgWidth * 0.3, this.svgHeight),
          new Coor(this.svgWidth * 0.3, this.svgHeight)
        ),
        new Curve(
          new Coor(this.svgWidth, this.svgHeight),
          new Coor(this.svgWidth * 0.9, this.svgHeight * 1.3)
        ),
      ]
    );
    this.maskHeaderCoor = this.initMaskHeaderPoints.getPath();
    this.maskMenuCoor = this.initMaskMenuPoints.getPath();
    this.maskFaqCoor = this.initMaskFaqPoints.getPath();
    this.maskPagesCoor = this.initMaskPagesPoints.getPath();
  }
  //initialise les coordonnée svg des mask
  initMaskPositions() {
    this.initMaskHeaderPoints = new SvgPath(new Coor(0, 0), [
      new Curve(
        new Coor(this.svgWidth * 0.9, 0),
        new Coor(this.svgWidth * 0.9, 0)
      ),
      new Curve(
        new Coor(0, this.svgHeight * 0.2),
        new Coor(0, this.svgHeight * 0.2)
      ),
    ]);
    this.initMaskMenuPoints = new SvgPath(new Coor(this.svgWidth, 0), [
      new Curve(
        new Coor(this.svgWidth, this.svgHeight * 0.15),
        new Coor(this.svgWidth, this.svgHeight * 0.15)
      ),
      new Curve(
        new Coor(this.svgWidth * 0.5, 0),
        new Coor(this.svgWidth * 0.5, 0)
      ),
    ]);
    this.initMaskFaqPoints = new SvgPath(
      new Coor(this.svgWidth, this.svgHeight),
      [
        new Curve(
          new Coor(this.svgWidth, this.svgHeight * 0.6),
          new Coor(this.svgWidth, this.svgHeight * 0.6)
        ),
        new Curve(
          new Coor(this.svgWidth, this.svgHeight),
          new Coor(this.svgWidth * 0.2, this.svgHeight)
        ),
      ]
    );
    this.initMaskPagesPoints = new SvgPath(
      new Coor(this.svgWidth, this.svgHeight),
      [
        new Curve(
          new Coor(this.svgWidth * 0.3, this.svgHeight),
          new Coor(this.svgWidth * 0.3, this.svgHeight)
        ),
        new Curve(
          new Coor(this.svgWidth, this.svgHeight),
          new Coor(this.svgWidth * 0.9, this.svgHeight * 1.3)
        ),
      ]
    );
    this.maskHeaderCoor = this.initMaskHeaderPoints.getPath();
    this.maskMenuCoor = this.initMaskMenuPoints.getPath();
    this.maskFaqCoor = this.initMaskFaqPoints.getPath();
    this.maskPagesCoor = this.initMaskPagesPoints.getPath();
  }
}
