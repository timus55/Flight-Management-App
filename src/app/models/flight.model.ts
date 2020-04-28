import { Time } from '@angular/common';

export class Flight{
    flightid:number;
    source:string;
    destination:string;
    date:Date;
    dtime:Time;
    ltime:Time;
    cost:number;
}