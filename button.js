var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

board.on("ready", function() {
  var button = new five.Button("A2");

  button.on("press", function() { console.log("Button Pressed!")});
  button.on("release", function() { console.log("Button Released!")});
});
