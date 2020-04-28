import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { FlightService } from '../../service/flight.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // creatinf FormGroup object
  loginForm: FormGroup;
  users: User[];
  fname: string[];
  submitted: boolean = false;
  // Constructor Dependency Injection
  // Dependency Injection makes your application loosey typed
  // So that application can be easily maintained

  // FormBuilder to build form elements with defaut values and validations
  // Router service to navigate programmatically from component to other
  constructor(private formBuilder: FormBuilder, private router: Router,
    private userService: UserService, private flightService: FlightService) { }

  // Life Cycle Hook
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  verifyLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    let username = this.loginForm.controls.name.value;
    let password = this.loginForm.controls.password.value;

    console.log(username + password);
    this.flightService.userValid(username, password).subscribe(data => {
      console.log(data);
      if (data > 0) {
        alert(`${this.loginForm.controls.name.value} Logged In successfully ..!`);
        // this.flightService.setBookUser(data);
        localStorage.userid = data;
        sessionStorage.userid = data;
        this.router.navigate(['/home']);
      }
      else {
        console.log("invalid login");
        return;

      }
    })
  } // end of verifyLogin() function

  invalidLogin: boolean = false;
}


