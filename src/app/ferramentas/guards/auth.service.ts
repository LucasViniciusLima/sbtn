import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  constructor(private route: Router) { }

  fazerLogin(email: string, senha: string, destiny: string) {
    if (email == 'lucaslimavzt@gmail.com' && senha == '123') {
      this.usuarioAutenticado = true;
      this.route.navigateByUrl('/ferramentas/'+destiny);
    }
    else {
      this.usuarioAutenticado = false;
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }  
}
