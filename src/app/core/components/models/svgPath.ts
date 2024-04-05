import { Coor } from './Coor';
import { Curve } from './Curve';

export class SvgPath {
  start: Coor;
  line: Coor;
  curve: Curve;

  constructor(start: Coor, line: Coor, curve: Curve) {
    this.start = start;
    this.line = line;
    this.curve = curve;
  }
  public getPath() {
    return `M ${this.start.x} ${this.start.y} L ${this.line.x} ${this.line.y} C ${this.curve.getCurve()} Z`;
  }
}
