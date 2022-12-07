/**
 * @param {number} n
 */
var SeatManager = function (n) {
  this.obj = {};
  this.length = n;
  for (let i = 1; i <= n; i++) {
    this.obj[i] = true;
  }
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  for (let i = 1; i <= this.length; i++) {
    if (this.obj[i]) {
      this.obj[i] = false;
      return i;
    }
  }
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  this.obj[seatNumber] = true;
};

console.log(new SeatManager(5));
var obj = new SeatManager(5);
