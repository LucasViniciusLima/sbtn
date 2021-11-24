import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService) {
    
   }

  ngOnInit(): void {
  }

  login(){
    this.authService.fazerLogin(this.email, this.senha);
  }

}
