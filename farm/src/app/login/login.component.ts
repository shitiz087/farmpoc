import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ViewChild } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _location: Location,private authentication : AuthenticationService) { }

  formname = "auth/";

  @ViewChild('f') userForm: NgForm;

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm);
    console.log(this.userForm.value.password);
    console.log(this.userForm.value.email);

    this.authentication.signIn(this.formname, this.userForm.value)
    .subscribe();


  }

}
