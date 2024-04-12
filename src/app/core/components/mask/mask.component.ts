import { Component, WritableSignal, computed, effect, signal } from '@angular/core';
import { Observable, tap, map, interval, take, timer } from 'rxjs';
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
  
  constructor(private sectionSelService: SectionSelService) {
    effect(() => this.maskModifier(this.selectedSection()));
    
  }
  ngOnInit(): void {
    this.loadingMaskPositions();
    timer(1500).pipe(map(()=>this.initMaskPositions())).subscribe();
    this.selectedSection= this.sectionSelService.sectionSelected;
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
        case 'accueil':
          console.log(`Sélection de la section: '${section}'`);
          this.initMaskPositions();
          break;
          case 'loading':
            console.log(`Sélection de la section: '${section}'`);
            this.loadingMaskPositions();
            break;
        case 'menu':
          let targetMenuCoor = new SvgPath(
            this.initMaskMenuPoints.start,
            this.initMaskMenuPoints.curves
          );
          targetMenuCoor.curves[0].target.y += this.svgHeight * 0.1;
          targetMenuCoor.curves[1].target.x += this.svgWidth * 1.06;
          targetMenuCoor.curves[1].poigne.x -= this.svgWidth * 1.086;
          targetMenuCoor.curves[1].poigne.y += this.svgHeight * 1.066;
          this.maskMenuCoor = targetMenuCoor.getPath();
        break;
      case 'faq':
        console.log(`Sélection de la section: '${section}'`);
        let targetAboutCoor = new SvgPath(
          this.initMaskFaqPoints.start,
          this.initMaskFaqPoints.curves);
          targetAboutCoor.start.x= this.svgWidth*0.1;
          targetAboutCoor.start.y= this.svgHeight*0.75;
          targetAboutCoor.curves[0].target.x = this.svgWidth*0.90;
          targetAboutCoor.curves[0].target.y = this.svgHeight*0.75;
          targetAboutCoor.curves[0].poigne.x = this.svgWidth*0.90;
          targetAboutCoor.curves[0].poigne.y = this.svgHeight*0.75;
          targetAboutCoor.curves[1].target.x = this.svgWidth*0.90;
          targetAboutCoor.curves[1].target.y = this.svgHeight*0.82;
          targetAboutCoor.curves[1].poigne.x = this.svgWidth;
          targetAboutCoor.curves[1].poigne.y = this.svgHeight*0.90;
          targetAboutCoor.curves.push(new Curve(        new Coor(this.svgWidth*0.1 , this.svgHeight*0.90),
          new Coor(this.svgWidth*0.1 , this.svgHeight*0.90)));
          targetAboutCoor.curves.push(new Curve(        new Coor(this.svgWidth*0.1 , this.svgHeight*0.75),
          new Coor(0 , this.svgHeight*0.82)));
          this.maskFaqCoor= targetAboutCoor.getPath();
        break;
      case 'pages':
        console.log(`Sélection de la section: '${section}'`);
        break;
      default:
        break;
    }
  }
  loadingMaskPositions() {
    this.initMaskHeaderPoints = new SvgPath(
      new Coor(0, 0), [
      new Curve(
        new Coor(this.svgWidth , 0),
        new Coor(this.svgWidth , 0)
      ),
      new Curve(
        new Coor(0, this.svgHeight),
        new Coor(0, this.svgHeight)
      ),
    ]);
    this.initMaskMenuPoints = new SvgPath(
      new Coor(this.svgWidth, 0), [
      new Curve(
        new Coor(0, this.svgHeight),
        new Coor(0, this.svgHeight)
      ),
      new Curve(
        new Coor(this.svgWidth,  this.svgHeight * 0.5),
        new Coor(this.svgWidth,  this.svgHeight * 0.5)
      ),
    ]);
    this.initMaskFaqPoints = new SvgPath(
      new Coor(this.svgWidth, this.svgHeight),
      [
        new Curve(
          new Coor(this.svgWidth, this.svgHeight* 0.5),
          new Coor(this.svgWidth, this.svgHeight* 0.5),
        ),
        new Curve(
          new Coor(0,   this.svgHeight ),
          new Coor(this.svgWidth *0, this.svgHeight * 1),
        ),
      ]
    );
    this.initMaskPagesPoints = new SvgPath(
      new Coor(this.svgWidth, this.svgHeight),
      [
        new Curve(
          new Coor(this.svgWidth * 0.3, this.svgHeight),
          new Coor(this.svgWidth * 0.3, this.svgHeight),
        ),
        new Curve(
          new Coor(this.svgWidth, this.svgHeight),
          new Coor(this.svgWidth * 0.9, this.svgHeight * 1.3),
        ),
      ]
    );
    this.maskHeaderCoor = this.initMaskHeaderPoints.getPath();
    this.maskMenuCoor = this.initMaskMenuPoints.getPath();
    this.maskFaqCoor = this.initMaskFaqPoints.getPath();
    this.maskPagesCoor = this.initMaskPagesPoints.getPath();
  }
  initMaskPositions(){
    this.initMaskHeaderPoints = new SvgPath(
      new Coor(0, 0), [
      new Curve(
        new Coor(this.svgWidth *0.9, 0),
        new Coor(this.svgWidth *0.9, 0)
      ),
      new Curve(
        new Coor(0, this.svgHeight * 0.20),
        new Coor(0, this.svgHeight * 0.20)
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
          new Coor(this.svgWidth, this.svgHeight *0.6),
          new Coor(this.svgWidth, this.svgHeight *0.6),
        ),
        new Curve(
          new Coor(this.svgWidth, this.svgHeight ),
          new Coor(this.svgWidth*0.2, this.svgHeight),
        ),
      ]
    );
    this.initMaskPagesPoints = new SvgPath(
      new Coor(this.svgWidth, this.svgHeight),
      [
        new Curve(
          new Coor(this.svgWidth * 0.3, this.svgHeight),
          new Coor(this.svgWidth * 0.3, this.svgHeight),
        ),
        new Curve(
          new Coor(this.svgWidth, this.svgHeight),
          new Coor(this.svgWidth * 0.9, this.svgHeight * 1.3),
        ),
      ]
    );
    this.maskHeaderCoor = this.initMaskHeaderPoints.getPath();
    this.maskMenuCoor = this.initMaskMenuPoints.getPath();
    this.maskFaqCoor = this.initMaskFaqPoints.getPath();
    this.maskPagesCoor = this.initMaskPagesPoints.getPath();

  }
}
