import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(flightList: any, source:any, destination:any,): any {
    let newList: any;

    // if(source & destination){
      newList = flightList.filter(flight=> flight.source==(source) && 
      flight.destination==(destination));
        
    // }
    // else{
    //   newList = flightList;
    // }

    return newList;
  }

}
