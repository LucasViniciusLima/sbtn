import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './User.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private route: Router) { }

  fazerLogin(email: string, senha: string) {
    if (email == 'lucaslimavzt@gmail.com' && senha == '123') {
      this.usuarioAutenticado = true;
      this.route.navigate(['/']);
    }
    else {
      this.usuarioAutenticado = false;
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }


}
