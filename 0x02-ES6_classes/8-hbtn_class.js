export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  valueOf() {
    return this.size; // returns the size of the class
  }

  toString() {
    return this.location; // returns the location of the class
  }
}
