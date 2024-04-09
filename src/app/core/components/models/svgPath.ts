import { Coor } from './Coor';
import { Curve } from './Curve';

export class SvgPath {
  start: Coor;
  curves: Curve[];

  constructor(start: Coor, curves: Curve[]) {
    this.start = start;
    this.curves = curves;
  }
  public getPath() {
    const startPoint = `M ${this.start.x} ${this.start.y} `;
    const curvesPoints = this.curves.map(curve => curve.getCurve()).join(" C ");
    return `${startPoint}${curvesPoints} Z`;
  }
}
