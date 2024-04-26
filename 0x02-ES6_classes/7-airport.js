export default class Airport {
  constructor(name, code) {
    this._name = null;
    this._code = null;

    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  display() {
    return `${this.name} (${this.code})`;
  }
}
