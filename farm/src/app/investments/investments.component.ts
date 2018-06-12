import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
profile()
{
 this.router.navigate(['/profilepage']) 
}
allfarms()
{
this.router.navigate(['/openbid'])

}
}
