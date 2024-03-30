export default class Magician {
  constructor(distance, damage) {
    this.distance = distance;
    this.damage = damage;
  }
  get attack() {
    let distanceModifier = 1;
    if (this.distance > 1) {
      distanceModifier = 1 - (this.distance - 1) * 0.1;
    }
    return this.damage * distanceModifier;
  }
  get stoned() {
    return Math.round(this.attack - Math.log(this.distance) * 5);
  }
}
