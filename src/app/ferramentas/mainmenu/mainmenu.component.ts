import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-menu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  email: string;

  constructor(private route: Router) { 
    this.email = this.route.getCurrentNavigation()?.extras?.state?.email;
  }

  ngOnInit(): void {
  }

}
