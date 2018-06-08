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

  constructor(private _location: Location) { }
  @ViewChild('f') userForm: NgForm;

  ngOnInit() {
  }

  onSubmit() {
    var name = this.userForm.value.user_name
    console.log(this.userForm);
    console.log(this.userForm.value.password);
    console.log(this.userForm.value.user_name);

    if (this.userForm.value.password === "test" && this.userForm.value.user_name === "shitiz" || this.userForm.value.password === "test" && this.userForm.value.user_name === "demo") {
      this._location.back();
      localStorage.setItem('name', name);
    }
    else
      alert("wrong username password")
    // this.authenticationservice.signIn(this.formname, this.userForm.value)
    //     .subscribe();


  }

}
