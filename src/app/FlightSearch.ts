import { PipeTransform, Pipe } from "@angular/core";
import { Flight } from "./Flight";

@Pipe({
    name:'search',
    pure: false,
})
export class FlightSearchPipe implements PipeTransform {
    transform(items: Flight[],searchName:string,searchStarting:string,searchDestination:string) {
       
       if(searchName!=null ||searchStarting!=null||searchDestination!=null){
           if(items&&items.length>0){
               return items.filter(item =>{
               if (searchName && item.flightName.toLowerCase().indexOf(searchName.toLowerCase()) === -1){
                   return false;
               }
               if (searchStarting && item.flightStarting.toLowerCase().indexOf(searchStarting.toLowerCase()) === -1){
                   return false;
               }
               if (searchDestination && item.flightDestination.toString().toLowerCase().indexOf(searchDestination.toLowerCase()) === -1){
                   return false;
               }
              
               return true;
          })
            

}
}else{
    return items;

}
    }
}