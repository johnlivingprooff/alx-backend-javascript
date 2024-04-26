export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(value) {
    this._brand = value;
  }

  set motor(value) {
    this._motor = value;
  }

  set color(value) {
    this._color = value;
  }

  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}