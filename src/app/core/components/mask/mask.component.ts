import { Component, WritableSignal, computed, signal } from '@angular/core';
import { Observable, tap, map, interval, take } from 'rxjs';
import { SectionSelService } from '../../services/section-sel.service';
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
  maskMod = computed(() => this.maskModifier(this.selectedSection()));
  svgWidth: number = window.innerWidth;
  svgHeight: number = window.innerHeight;
  initMaskFaqPoints!: SvgPath;
  initMaskHeaderPoints!: SvgPath;
  initMaskMenuPoints!: SvgPath;
  initMaskPagesPoints!: SvgPath;
  maskHeaderCoor!: string;
  maskMenuCoor!: string;
  maskFaqCoor!: string;
  maskPagesCoor!: string;

  constructor(private sectionSelService: SectionSelService) {}
  ngOnInit(): void {
    this.initMaskPositions();
    this.selectedSection = this.sectionSelService.sectionSelected;
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
    switch (section) {
      case 'menu':
        console.log(`Sélection de la section: '${section}'`);
        interval(30)
          .pipe(
            take(5),
            map(() => {
              let targetCoor = new SvgPath(
                this.initMaskMenuPoints.start,
                this.initMaskMenuPoints.curves
              );
              targetCoor.curves[0].finish.y += this.svgHeight * 0.1;
              targetCoor.curves[1].finish.x += this.svgWidth * 1.06;
              targetCoor.curves[1].poigne1.x -= this.svgWidth * 1.086;
              targetCoor.curves[1].poigne1.y += this.svgHeight * 1.066;
              return targetCoor.getPath();
            })
          )
          .subscribe();
        break;
      case 'faq':
        console.log(`Sélection de la section: '${section}'`);
        interval(30)
          .pipe(
            take(5),
            map(() => {
              let targetCoor = new SvgPath(
                this.initMaskFaqPoints.start,
                this.initMaskFaqPoints.curves
              );
              targetCoor.curves[0].finish.y += this.svgHeight * 0.1;
              targetCoor.curves[1].finish.x += this.svgWidth * 1.06;
              targetCoor.curves[1].poigne1.x -= this.svgWidth * 1.086;
              targetCoor.curves[1].poigne1.y += this.svgHeight * 1.066;
              return targetCoor.getPath();
            })
          )
          .subscribe();
        break;
      case 'pages':
        console.log(`Sélection de la section: '${section}'`);
        break;
      case 'accueil':
        console.log(`Sélection de la section: '${section}'`);
        this.initMaskPositions();
        break;
      default:
        break;
    }
  }
  initMaskPositions() {
    this.initMaskHeaderPoints = new SvgPath(
      new Coor(this.svgWidth * 0.75, 0), [
      new Curve(
        new Coor(0, this.svgHeight * 0.2),
        new Coor(0, this.svgHeight * 0.2),
        new Coor(0, this.svgHeight * 0.2)
      ),
      new Curve(
        new Coor(0, 0),
        new Coor(0, 0),
        new Coor(0, 0)
      ),
    ]);
    this.initMaskMenuPoints = new SvgPath(new Coor(this.svgWidth, 0), [
      new Curve(
        new Coor(this.svgWidth, this.svgHeight * 0.15),
        new Coor(this.svgWidth, this.svgHeight * 0.15),
        new Coor(this.svgWidth, this.svgHeight * 0.15)
      ),
      new Curve(
        new Coor(this.svgWidth * 0.5, 0),
        new Coor(this.svgWidth * 0.5, 0),
        new Coor(this.svgWidth * 0.5, 0)
      ),
    ]);
    this.initMaskFaqPoints = new SvgPath(
      new Coor(this.svgWidth, this.svgHeight),
      [
        new Curve(
          new Coor(this.svgWidth * 0.3, this.svgHeight),
          new Coor(this.svgWidth * 0.3, this.svgHeight),
          new Coor(this.svgWidth * 0.3, this.svgHeight)
        ),
        new Curve(
          new Coor(this.svgWidth, this.svgHeight),
          new Coor(this.svgWidth * 0.9, this.svgHeight * 1.3),
          new Coor(this.svgWidth, this.svgHeight * 0.75)
        ),
      ]
    );
    this.initMaskPagesPoints = new SvgPath(
      new Coor(this.svgWidth, this.svgHeight),
      [
        new Curve(
          new Coor(this.svgWidth * 0.3, this.svgHeight),
          new Coor(this.svgWidth * 0.3, this.svgHeight),
          new Coor(this.svgWidth * 0.3, this.svgHeight)
        ),
        new Curve(
          new Coor(this.svgWidth, this.svgHeight),
          new Coor(this.svgWidth * 0.9, this.svgHeight * 1.3),
          new Coor(this.svgWidth, this.svgHeight * 0.75)
        ),
      ]
    );
    this.maskHeaderCoor = this.initMaskHeaderPoints.getPath();
    this.maskMenuCoor = this.initMaskMenuPoints.getPath();
    this.maskFaqCoor = this.initMaskFaqPoints.getPath();
    this.maskPagesCoor = this.initMaskPagesPoints.getPath();
  }
}
