//set johnny-five dependency
var five = require("johnny-five");
//references to components
var board, led, button;

//initialize the microcontroller
board = new five.Board();

//if the initialization is successful, run the code
board.on("ready", function (){

    //initialize the pin the led is attached to
    led = new five.Led(11);
    //initialize the pin the button is attached to
    button = new five.Button(2);

    //set up action status
    button.on("press", function(){
       led.strobe(300);
    });

});