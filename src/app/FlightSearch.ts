import { PipeTransform, Pipe } from "@angular/core";
import { Flight } from "./Flight";

@Pipe({
    name:'search',
    pure: false,
})
export class FlightSearchPipe implements PipeTransform {
    transform(items: Flight[],flightName:string) {
        if(items&&items.length>0){
            return items.filter(item =>{
                if (flightName && item.flightName.toLowerCase().indexOf(flightName.toLowerCase()) === -1){
                   
                    return false;
                }
                
                return true;
           })

}
    }
}