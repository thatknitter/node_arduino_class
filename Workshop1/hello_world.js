//Set johnny-five dependency
var five = require("johnny-five");
//Set up references to the board and the led
var board, led;

//initialize the microcontroller
board = new five.Board();

//if the initialization is successful, run this block of code
board.on("ready", function() {
    //set up an led object with the pin at 13
    led = new five.Led(13);
    //strobe the led
    led.strobe(300);
});
