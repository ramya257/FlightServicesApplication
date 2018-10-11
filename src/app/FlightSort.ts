import { Pipe, PipeTransform } from "@angular/core";
import { Flight } from "./Flight";

@Pipe({
    name:'sort',
    pure: false,
})
export class FlightSortPipe implements PipeTransform {
    transform(items:Flight[],args?:any) {
        return items.sort(function(a, b){
            if(a[args.property] < b[args.property]){
              return -1 * args.direction; //-1 ascending
            }
            else if( a[args.property] > b[args.property]){
              return 1 * args.direction; //1 desc
            }
            else{
              return 0;
            }
          });
      };
    }
