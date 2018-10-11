"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FlightSearchPipe = (function () {
    function FlightSearchPipe() {
    }
    FlightSearchPipe.prototype.transform = function (items, searchName, searchStarting, searchDestination) {
        if (items && items.length > 0) {
            return items.filter(function (item) {
                if (searchName && item.flightName.toLowerCase().indexOf(searchName.toLowerCase()) === -1) {
                    return false;
                }
                else if (searchStarting && item.flightName.toLowerCase().indexOf(searchStarting.toLowerCase()) === -1) {
                    return false;
                }
                else if (searchDestination && item.flightName.toLowerCase().indexOf(searchDestination.toLowerCase()) === -1) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    };
    return FlightSearchPipe;
}());
FlightSearchPipe = __decorate([
    core_1.Pipe({
        name: 'search',
        pure: false,
    })
], FlightSearchPipe);
exports.FlightSearchPipe = FlightSearchPipe;
