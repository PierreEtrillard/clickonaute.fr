import { Coor } from './Coor';
export class Curve {
  poigne: Coor;
  target: Coor;
  constructor(poigne: Coor,target: Coor) {
    this.poigne = poigne;
    this.target = target;
  }
  getCurve():string {
    return `${this.poigne.x} ${this.poigne.y}, ${this.target.x} ${this.target.y}`;
  }
  setCurve(poigne: Coor, target: Coor) {
    this.poigne = poigne;
    this.target = target;
    return this.getCurve()
  }
}
