import {Injectable} from '@angular/core';
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Flight } from "./Flight";
import "rxjs/add/operator/map"

@Injectable()
export class FlightService {
    
    constructor(private http:Http){
        
    }
    
    getAllFlights():Observable<Flight[]>{
        return this.http.get('./app/flight.json').map((response:Response)=><Flight[]>response.json());
    }
    
    
}