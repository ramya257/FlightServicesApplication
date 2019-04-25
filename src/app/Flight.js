"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Flight = /** @class */ (function () {
    function Flight(name, price, starting, destination, arrival, departure) {
        this.flightName = name;
        this.flightPrice = price;
        this.flightStarting = starting;
        this.flightDestination = destination;
        this.flightArrival = arrival;
        this.flightDeparture = departure;
    }
    return Flight;
}());
exports.Flight = Flight;
