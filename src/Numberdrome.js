'use strict';

class Numberdrome {
  constructor(...args) {
    this.list = args;
  }

  addNumber(number) {
    this.list.push(number);
  }

  removeNumber(number) {
    this.list = this.list.filter(element => element !== number);
  }

  sum() {
    return this.list.reduce((sum, value) => sum + value, 0);
  }

  product() {
    return this.list.reduce((sum, value) => sum * value, 1);
  }

  min() {
    return this.list.length
      ? Math.min(...this.list)
      : 'error';
  }

  max() {
    return this.list.length
      ? Math.max(...this.list)
      : 'error';
  }
}

module.exports = {
  Numberdrome,
};
