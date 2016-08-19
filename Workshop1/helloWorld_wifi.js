var five = require('johnny-five');
var VirtualSerialPort = require('udp-serial').SerialPort;
var firmata = require('firmata');
var board, led;

//create new serial port and specify the host to connect to
var sp = new VirtualSerialPort({
  host: '192.168.4.1',
  type: 'udp4',
  port: 1025
});

//use the serial port to send instructions to a new device
var io = new firmata.Board(sp);
io.once('ready', function(){
  console.log('IO ready');
  io.isReady = true;
  var board = new five.Board({io: io, repl: true});
  board.on('ready', function(){
    console.log('five ready');
    var led = new five.Led(13);
    led.blink(500);
  });
});
