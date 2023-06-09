class RangeList {
  ranges = [];

  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  add(range) {
    const [start, end] = range;
    if (start > end) {
      return;
    }
    if (this.ranges.length === 0) {
      this.ranges.push(range);
      return;
    }
    let left = null;
    let right = null;
    for (let i = 0; i < this.ranges.length; i += 1) {
      const [start1, end1] = this.ranges[i];
      if (start) {
        
      }
    }
  }
  /**
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  remove(range) {
    const [start, end] = range;
  }
  /**
   * Prints out the list of ranges in the range list
   */
  print() {
    const pairs = [];
    for (let i = 0; i < this.data.length; i += 2) {
      pairs.push(`[${this.data[i]}, ${this.data[i + 1]})`);
    }
    console.log(pairs.join(" "));
  }
}
