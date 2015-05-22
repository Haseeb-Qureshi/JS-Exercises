function Clock () {
}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  time = this.currentTime;
  console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
};

Clock.prototype.run = function () {
  this.currentTime = new Date();
  this.printTime();
  setTimeout(this._tick.bind(this), this.TICK);
};

Clock.prototype._tick = function () {
  time = this.currentTime.valueOf();
  this.currentTime = new Date(time + 5000);
  this.printTime();
  setTimeout(this._tick.bind(this), this.TICK);

};

var clock = new Clock();
clock.run();
