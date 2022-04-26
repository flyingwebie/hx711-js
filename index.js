//const HX711 = require('HX711')

// Old Import Style
//const HX711 = require('@ataberkylmz/hx711');

// ES Module import
import HX711 from '@ataberkylmz/hx711';

let clockPin = 5 // Whatever pin clock is connected to
let dataPin = 6  // Whatever pin data is connected to

// Create an object
const sensor = new HX711(clockPin, dataPin);
// Power on the Sensor
sensor.powerUp();

let units = sensor.getUnits();

//setInterval(logScale, 1000);
console.log(units);
//console.log(units)

// function logScale(){
// 	for(i = 0; i <= 1; i++){
// 		console.log(units);
// 	}
// }

// Power off the sensor
sensor.powerDown();
