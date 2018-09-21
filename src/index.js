class Sorter {
  constructor() {
    this.array  = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    if(!Array.isArray(indices)) throw new Error ('indices should be an array');

    indices.sort();

    let sortedArray = indices
    .map((el) => this.array[el])
    .sort(this.comparator);

    indices.forEach((el, i) => { this.array[el] = sortedArray[i];
    });
  }

  setComparator(compareFunction) {
    if(typeof compareFunction !== 'function') throw new Error('compareFunction should be type of function');

    this.comparator = compareFunction;
  }
}

module.exports = Sorter;