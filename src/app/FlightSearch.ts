import { PipeTransform, Pipe } from "@angular/core";
import { Flight } from "./Flight";

@Pipe({
    name:'search',
    pure: false,
})
export class FlightSearchPipe implements PipeTransform {
    transform(items: Flight[],searchName:string,searchStarting:string,searchDestination:string) {
       
        if(items&&items.length>0){
            return items.filter(item =>{
                if (searchName && item.flightName.toLowerCase().indexOf(searchName.toLowerCase()) === -1){
                   
                    return false;
                }
                else if (searchStarting && item.flightStarting.toLowerCase().indexOf(searchStarting.toLowerCase()) === -1){
                    
                    return false;
                }
                else if (searchDestination && item.flightDestination.toLowerCase().indexOf(searchDestination.toLowerCase()) === -1){
                    
                    return false;
                }
                return true;
           })

}else{
    return items;
}
}
}