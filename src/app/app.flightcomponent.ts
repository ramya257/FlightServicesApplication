import { Component, OnInit } from "@angular/core";
import { FlightService } from "./FlightService";
import { Flight } from "./Flight";
import { FlightSearchPipe } from "./FlightSearch";


@Component({
    selector:'flight-app',
    templateUrl:'./app.flightcomponent.html',
    providers:[FlightService,FlightSearchPipe]
    
    
})
export class FlightComponent implements OnInit{
    add: boolean=false;
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


    name:string;
    price:number;
    starting:string;
    destination:string;
    arrival:string;
    departure:string;

    searchText:string;
   



    
    constructor(private flightService:FlightService,private flightSearchPipe:FlightSearchPipe){
       
    }
    ngOnInit(): void {
       this.flightService.getAllFlights().subscribe(flights=>{this.flightsList=flights,this.isFlightsLoaded=true});
    }
    
    deleteFlight(flight:any){
        console.log("delete");
        let index=this.flightsList.indexOf(flight,0);
        this.flightsList.splice(index, 1);
    }
    
    updateFlight(flight:any):void{
        this.update=true;
        this.add=false;
        let index=this.flightsList.indexOf(flight,0);
        this.count=index;
        console.log(index);
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
    
   
    addFlight():void{
        this.clear();
        this.add=true;
        this.update=false;
        
        
    }
    addFlightData():void{
        let flightData=this.flightObject();
        this.flightsList.push(flightData);
        console.log(this.flightsList);
        this.add=false;
    }
    
    flightObject():Flight{
       this.flight.flightName=this.name;
       this.flight.flightPrice=this.price;
       this.flight.flightStarting=this.starting;
       this.flight.flightDestination=this.destination;
       this.flight.flightArrival=this.arrival;
       this.flight.flightDeparture=this.departure;
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
      }
    search(searchText:string){
        console.log(searchText);
    }
        
      
      
      
      //sorting
      
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
}