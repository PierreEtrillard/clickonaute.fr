import { Component, signal } from '@angular/core';
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
  selectedSection$!: Observable<string>;
  svgWidth: number = window.innerWidth;
  svgHeight: number = window.innerHeight;
  initMaskFaqPoints!: SvgPath;
  initMaskHeaderPoints!: SvgPath;
  initMaskMenuPoints!: SvgPath;
  maskHeaderCoor = signal(this.initMaskHeaderPoints);
  maskMenuCoor = signal(this.initMaskMenuPoints);
  maskFaqCoor = signal(this.initMaskFaqPoints);
  constructor(private sectionSelService: SectionSelService) {}
  ngOnInit(): void {
    this.initMaskPositions();
    this.selectedSection$ = this.sectionSelService.sectionSelected;
    this.selectedSection$
      .pipe(map((section) => this.maskModifier(section)))
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
    switch (section) {
      case 'menu':
        interval(30)
          .pipe(
            take(5),
            map((count) => {
              this.maskMenuCoor.update((initPath) => {
                let targetCoor = new SvgPath(
                  initPath.start,
                  initPath.line,
                  initPath.curve
                );
                targetCoor.line.y += this.svgHeight * 0.1;
                targetCoor.curve.finish.x += this.svgWidth * 0.06
                targetCoor.curve.poigne1.x -= this.svgWidth * 0.086;
                targetCoor.curve.poigne1.y += this.svgHeight * 0.066;
                // targetCoor.line.y + * 0.75
                // targetCoor.curve.finish.x + *0.45;
                // targetCoor.curve.poigne1.x + *0.65;
                // targetCoor.curve.poigne1.y +  *0.5;
               return targetCoor;
              });
            })
          )
          .subscribe();
        console.log(`Sélection de la section: '${section}'`);
        break;
      case 'faq':
        console.log(`Sélection de la section: '${section}'`);
        this.maskFaqCoor.set(this.initMaskFaqPoints);
        break;
      case 'pages':
        console.log(`Sélection de la section: '${section}'`);
        break;
      case 'accueil':
        console.log(`Sélection de la section: '${section}'`);
        this.maskMenuCoor.update(() => this.initMaskMenuPoints);
        break;
      default:
        break;
    }
  }
  initMaskPositions() {
    this.initMaskHeaderPoints = new SvgPath(
      new Coor(this.svgWidth * 0.75, 0),
      new Coor(0, this.svgHeight * 0.2),
      new Curve(new Coor(0, 0), new Coor(0, 0), new Coor(0, 0))
    );
    this.initMaskMenuPoints = new SvgPath(
      new Coor(this.svgWidth, 0),
      new Coor(this.svgWidth, this.svgHeight * 0.15),
      new Curve(
        new Coor(this.svgWidth * 0.5, 0),
        new Coor(this.svgWidth * 0.5, 0),
        new Coor(this.svgWidth * 0.5, 0)
      )
    );
    this.initMaskFaqPoints = new SvgPath(
      new Coor(this.svgWidth, this.svgHeight),
      new Coor(this.svgWidth * 0.3, this.svgHeight),
      new Curve(
        new Coor(this.svgWidth, this.svgHeight),
        new Coor(this.svgWidth * 0.9, this.svgHeight * 1.3),
        new Coor(this.svgWidth, this.svgHeight * 0.75)
      )
    );
    this.maskHeaderCoor = signal(this.initMaskHeaderPoints);
    this.maskMenuCoor = signal(this.initMaskMenuPoints);
    this.maskFaqCoor = signal(this.initMaskFaqPoints);
  }
}
