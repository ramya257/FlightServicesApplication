import { Component, OnInit } from "@angular/core";
import { FlightService } from "./FlightService";
import { Flight } from "./Flight";
import { FlightSearchPipe } from "./FlightSearch";
import { NgForm } from "@angular/forms";


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

    //update
    fName:string;
    fPrice:number;
    fStarting:string;
    fDestination:string;
    fArrival:string;
    fDeparture:string;

//sort
    isDesc: boolean = false;
    column: string = '';
    direction: number;


//add
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
    addFlightData(form:NgForm):void{
 
       
        this.flightsList.push(new Flight(this.name,this.price,this.starting,this.destination,this.arrival,this.departure));
        console.log(this.flightsList);
        this.add=false;
        this.clearAdd();
        
    }
    
    /*addFlightData():void{
        
        this.flightsList.push(new Flight(this.name,this.price,this.starting,this.destination,this.arrival,this.departure));
        console.log(this.flightsList);
        this.add=false;
        this.clearAdd();
    }*/
    
    clear():void{
        this.fName=null;
        this.fPrice=null;
        this.fStarting=null;
        this.fDestination=null;
        this.fArrival=null;
        this.fDeparture=null;
    }
    
    clearAdd():void{
        this.name=null;
        this.price=null;
        this.starting=null;
        this.destination=null;
        this.arrival=null;
        this.departure=null;
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