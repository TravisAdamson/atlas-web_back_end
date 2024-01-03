export default class HolbertonClass {
  constructor(size, location) {
    if (typeof location !== 'string') {
      throw TypeError('Location must be a string');
    }
    if (typeof size !== 'number') {
      throw TypeError('Size must be a number');
    }
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](typeRequested) {
    if (typeRequested === 'string') {
      return this._location;
    }
    return this._size;
  }
}
