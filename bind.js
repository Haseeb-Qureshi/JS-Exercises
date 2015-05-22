Function.prototype.myBind = function (context) {
  var fn = this;
  return function () {
    fn.apply(context);
  };
};

function EarlFamily() {
  this.name = "Earl Watts";
  this.sayName = function() { console.log("My name is " + this.name); };
}

var Earl1 = new EarlFamily();
var earlname = Earl1.sayName;

earlname.myBind(Earl1)();
