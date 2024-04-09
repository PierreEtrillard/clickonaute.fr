import { Coor } from './Coor';
export class Curve {
  poigne1: Coor;
  poigne2: Coor;
  finish: Coor;
  constructor(poigne1: Coor, poigne2: Coor, finish: Coor) {
    this.poigne1 = poigne1;
    this.poigne2 = poigne2;
    this.finish = finish;
  }
  getCurve():string {
    return `${this.poigne1.x} ${this.poigne1.y}, ${this.poigne2.x} ${this.poigne1.y}, ${this.finish.x} ${this.finish.y}`;
  }
  setCurve(poigne1: Coor, poigne2: Coor, finish: Coor) {
    this.poigne1 = poigne1;
    this.poigne2 = poigne2;
    this.finish = finish;
    return this.getCurve()
  }
}
