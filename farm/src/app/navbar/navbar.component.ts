import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  uname:any;
  constructor(private router: Router) { }

  ngOnInit() {
   this.uname = localStorage.getItem('name');
  }

  logout()
  {
    localStorage.removeItem('name');
    this.router.navigate(['/login']);
  }
}
