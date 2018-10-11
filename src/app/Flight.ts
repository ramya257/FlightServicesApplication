export class Flight {
    flightName:string;
    flightPrice:number;
    flightStarting:string;
    flightDestination:string;
    flightArrival:string;
    flightDeparture:string;

constructor(name:string,price:number,starting:string,destination:string,arrival:string,departure:string){
    this.flightName=name;
    this.flightPrice=price;
    this.flightStarting=starting;
    this.flightDestination=destination;
    this.flightArrival=arrival;
    this.flightDeparture=departure;
}

}