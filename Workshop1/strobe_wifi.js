var VirtualSerialPort = require('udp-serial').SerialPort;
var firmata = require('firmata');
var five = require('johnny-five');
var board, led, button;

//create new serial port and specify the host to connect to
var sp = new VirtualSerialPort({
  host: '192.168.4.1',
  type: 'udp4',
  port: 1025
});

//use the serial port to send instructions to a new device
var io = new firmata.Board(sp);
io.once('ready', function(){
  led = new five.Led(11);
  button = new five.button(2);
  board = new five.Board({io: io, repl: true});
  board.on('ready', function(){
    button.on('press', function(){
      led.strobe(300);
    });
  });
});
