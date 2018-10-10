import { Component, OnInit } from "@angular/core";
import { FlightService } from "./FlightService";
import { Flight } from "./Flight";


@Component({
    selector:'flight-app',
    templateUrl:'./app.flightcomponent.html',
    providers:[FlightService]
    
    
})
export class FlightComponent implements OnInit{
    add: boolean;
    count: number;
    update: boolean=false;
    
    isFlightsLoaded:boolean=false;
    flightsList:Flight[];
    flight:any={};


    fName:String;
    fPrice:number;
    fStarting:string;
    fDestination:string;
    fArrival:string;
    fDeparture:string;

    isDesc: boolean = false;
    column: string = 'flightName';
    direction: number;



    
    constructor(private flightService:FlightService){
        
    }
    ngOnInit(): void {
       this.flightService.getAllFlights().subscribe(flights=>{this.flightsList=flights,this.isFlightsLoaded=true});
    }
    
    deleteFlight(index:number){
        console.log("delete");
        this.flightsList.splice(index, 1);
    }
    
    updateFlight(index:number):void{
        this.update=true;
        this.count=index;
        this.fName=this.flightsList[index].flightName;
        this.fPrice=this.flightsList[index].flightPrice;
        this.fStarting=this.flightsList[index].flightStarting;
        this.fDestination=this.flightsList[index].flightDestination;
        this.fArrival=this.flightsList[index].flightArrival;
        this.fDeparture=this.flightsList[index].flightDeparture;
        
        
    }
    onUpdate():void{
        this.update=false;
        this.flightsList[this.count].flightName= this.fName;
        this.flightsList[this.count].flightPrice=this.fPrice;
        this.flightsList[this.count].flightStarting=this.fStarting;;
        this.flightsList[this.count].flightDestination= this.fDestination;
        this.flightsList[this.count].flightArrival=this.fArrival;
        this.flightsList[this.count].flightDeparture= this.fDeparture;
       
    }
    
    sortName():void{
        this.flightsList.sort(function(flight1:Flight,flight2:Flight){
            if(flight1.flightName< flight2.flightName)
                return -1;
            else if(flight1.flightName > flight2.flightName)
                   return 1;
            else
                return 0;
        });
    }
    sortPrice():void{
        this.flightsList.sort(function(flight1:Flight,flight2:Flight){
            if(flight1.flightPrice< flight2.flightPrice)
                return -1;
            else if(flight1.flightPrice > flight2.flightPrice)
                   return 1;
            else
                return 0;
        });
    }
    
    sortStarting():void{
        this.flightsList.sort(function(flight1:Flight,flight2:Flight){
            if(flight1.flightStarting< flight2.flightStarting)
                return -1;
            else if(flight1.flightStarting > flight2.flightStarting)
                   return 1;
            else
                return 0;
        });
    }
    sortDestination():void{
        this.flightsList.sort(function(flight1:Flight,flight2:Flight){
            if(flight1.flightDestination< flight2.flightDestination)
                return -1;
            else if(flight1.flightDestination > flight2.flightDestination)
                   return 1;
            else
                return 0;
        });
    }
    sortArrival():void{
        this.flightsList.sort(function(flight1:Flight,flight2:Flight){
            if(flight1.flightArrival< flight2.flightArrival)
                return -1;
            else if(flight1.flightArrival > flight2.flightArrival)
                   return 1;
            else
                return 0;
        });
    }
    sortDeparture():void{
        this.flightsList.sort(function(flight1:Flight,flight2:Flight){
            if(flight1.flightDeparture< flight2.flightDeparture)
                return -1;
            else if(flight1.flightDeparture > flight2.flightDeparture)
                   return 1;
            else
                return 0;
        });
    }
    addFlight():void{
        this.clear();
        this.add=true;
        
        
    }
    addFlightData():void{
        let flightData=this.flightObject();
        this.flightsList.push(flightData);
        console.log(this.flightsList);
        this.add=false;
    }
    
    flightObject():Flight{
       this.flight.flightName=this.fName;
       this.flight.flightPrice=this.fPrice;
       this.flight.flightStarting=this.fStarting;
       this.flight.flightDestination=this.fDestination;
       this.flight.flightArrival=this.fArrival;
       this.flight.flightDeparture=this.fDeparture;
       return this.flight;
        
    }
    clear():void{
        this.fName=null;
        this.fPrice=null;
        this.fStarting=null;
        this.fDestination=null;
        this.fArrival=null;
        this.fDeparture=null;
    }
    
    sort(property:any){
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
      };
        
}