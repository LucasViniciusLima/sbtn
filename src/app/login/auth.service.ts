import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  private user: any;

  constructor(private route: Router, private store: StoreService) { }

  fazerLogin(email: string, senha: string) {
    this.store.getUserData(email, 'users').then((doc: any) => {
      if (doc?.password == senha) {
        this.usuarioAutenticado = true;
        this.route.navigateByUrl('/ferramentas', {
          state: {
            "email":email
          }
        });
      } else {
        this.usuarioAutenticado = false;
      }
    });


  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }


}
