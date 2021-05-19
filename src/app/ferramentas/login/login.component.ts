import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  redirect: string = '/businessmodel';

  constructor(private route: Router) {
    const nav = this.route.getCurrentNavigation();
    if(nav.extras.state != undefined) this.redirect = nav.extras.state.redirect;
   }

  ngOnInit(): void {
  }

  entrarEmail(){
    this.route.navigateByUrl(this.redirect, { state: { email: this.email} });
  }
}
