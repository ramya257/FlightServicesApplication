"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var FlightService_1 = require("./FlightService");
var FlightComponent = (function () {
    function FlightComponent(flightService) {
        this.flightService = flightService;
        this.update = false;
        this.isFlightsLoaded = false;
        this.flight = {};
        this.isDesc = false;
        this.column = 'flightName';
    }
    FlightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flightService.getAllFlights().subscribe(function (flights) { _this.flightsList = flights, _this.isFlightsLoaded = true; });
    };
    FlightComponent.prototype.deleteFlight = function (index) {
        console.log("delete");
        this.flightsList.splice(index, 1);
    };
    FlightComponent.prototype.updateFlight = function (index) {
        this.update = true;
        this.count = index;
        this.fName = this.flightsList[index].flightName;
        this.fPrice = this.flightsList[index].flightPrice;
        this.fStarting = this.flightsList[index].flightStarting;
        this.fDestination = this.flightsList[index].flightDestination;
        this.fArrival = this.flightsList[index].flightArrival;
        this.fDeparture = this.flightsList[index].flightDeparture;
    };
    FlightComponent.prototype.onUpdate = function () {
        this.update = false;
        this.flightsList[this.count].flightName = this.fName;
        this.flightsList[this.count].flightPrice = this.fPrice;
        this.flightsList[this.count].flightStarting = this.fStarting;
        ;
        this.flightsList[this.count].flightDestination = this.fDestination;
        this.flightsList[this.count].flightArrival = this.fArrival;
        this.flightsList[this.count].flightDeparture = this.fDeparture;
    };
    FlightComponent.prototype.sortName = function () {
        this.flightsList.sort(function (flight1, flight2) {
            if (flight1.flightName < flight2.flightName)
                return -1;
            else if (flight1.flightName > flight2.flightName)
                return 1;
            else
                return 0;
        });
    };
    FlightComponent.prototype.sortPrice = function () {
        this.flightsList.sort(function (flight1, flight2) {
            if (flight1.flightPrice < flight2.flightPrice)
                return -1;
            else if (flight1.flightPrice > flight2.flightPrice)
                return 1;
            else
                return 0;
        });
    };
    FlightComponent.prototype.sortStarting = function () {
        this.flightsList.sort(function (flight1, flight2) {
            if (flight1.flightStarting < flight2.flightStarting)
                return -1;
            else if (flight1.flightStarting > flight2.flightStarting)
                return 1;
            else
                return 0;
        });
    };
    FlightComponent.prototype.sortDestination = function () {
        this.flightsList.sort(function (flight1, flight2) {
            if (flight1.flightDestination < flight2.flightDestination)
                return -1;
            else if (flight1.flightDestination > flight2.flightDestination)
                return 1;
            else
                return 0;
        });
    };
    FlightComponent.prototype.sortArrival = function () {
        this.flightsList.sort(function (flight1, flight2) {
            if (flight1.flightArrival < flight2.flightArrival)
                return -1;
            else if (flight1.flightArrival > flight2.flightArrival)
                return 1;
            else
                return 0;
        });
    };
    FlightComponent.prototype.sortDeparture = function () {
        this.flightsList.sort(function (flight1, flight2) {
            if (flight1.flightDeparture < flight2.flightDeparture)
                return -1;
            else if (flight1.flightDeparture > flight2.flightDeparture)
                return 1;
            else
                return 0;
        });
    };
    FlightComponent.prototype.addFlight = function () {
        this.clear();
        this.add = true;
    };
    FlightComponent.prototype.addFlightData = function () {
        var flightData = this.flightObject();
        this.flightsList.push(flightData);
        console.log(this.flightsList);
        this.add = false;
    };
    FlightComponent.prototype.flightObject = function () {
        this.flight.flightName = this.fName;
        this.flight.flightPrice = this.fPrice;
        this.flight.flightStarting = this.fStarting;
        this.flight.flightDestination = this.fDestination;
        this.flight.flightArrival = this.fArrival;
        this.flight.flightDeparture = this.fDeparture;
        return this.flight;
    };
    FlightComponent.prototype.clear = function () {
        this.fName = null;
        this.fPrice = null;
        this.fStarting = null;
        this.fDestination = null;
        this.fArrival = null;
        this.fDeparture = null;
    };
    FlightComponent.prototype.sort = function (property) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ;
    return FlightComponent;
}());
FlightComponent = __decorate([
    core_1.Component({
        selector: 'flight-app',
        templateUrl: './app.flightcomponent.html',
        providers: [FlightService_1.FlightService]
    }),
    __metadata("design:paramtypes", [FlightService_1.FlightService])
], FlightComponent);
exports.FlightComponent = FlightComponent;
