const HX711 = require('@ataberkylmz/hx711');

// Add your BCM Values
const clockPin = 6;  // PIN 31 - DT
const dataPin = 5;  // PIN 29 - SCK

const sensor = new HX711(clockPin, dataPin);

console.log("Starting sensor");

// Power up the sensor HX711
sensor.powerUp();
sensor.tare();

sensor.setScale(428831);


while (1) {
        console.log("data: " + sensor.getUnits());
}