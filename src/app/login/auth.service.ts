import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './User.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private route: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.email == 'lucaslimavzt@gmail.com' && usuario.senha == '123') {
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
