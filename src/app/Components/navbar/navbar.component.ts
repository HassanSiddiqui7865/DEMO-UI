import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  route:any;
  constructor(private router : Router){
  }

  ngOnInit(): void {
    this.route = this.router.url.split("/")[1]
  }
}
