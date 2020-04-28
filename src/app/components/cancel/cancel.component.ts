import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';
import { Flight1 } from '../../models/Airline.model';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
  cancelForm: FormGroup;
  invalidLogin: boolean = false;
  isValidUser: boolean = false;
  submitted: boolean = false;
  flights: Flight1[] = [];
  flights2: Flight[] = [];
  flightid: number;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private flightService: FlightService) { }

  ngOnInit() {
    this.cancelForm = this.formBuilder.group({
      flightid: ['', Validators.required],
      bookid: ['', Validators.required]
    });
  }

  paynow(){
    alert(`Pay ${this.flights2[0].cost} rupees ..!`);

    alert(`Payment Successful Booking ID = 333 ..!`);
   
  }
  cancelFlight() {

    confirm(`Do You want To Cancel Booking ?`);

    alert(`Booking Cancelled ..!`);
    this.flightService.getAllFlights().subscribe(data =>{
      this.flights2=data;

      console.log(this.flights);
    })
    this.router.navigate(['/home']);
  }
}
