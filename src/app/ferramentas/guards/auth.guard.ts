import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/ferramentas/guards/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuardService implements CanActivate {
  email: string;
    
  constructor(private authService: AuthService, private router: Router) { 
    this.email = this.router.getCurrentNavigation()?.extras?.state?.email;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    } else {      
      this.router.navigateByUrl('/usuario-entrar',{state:{email: this.email, destino: route.url[0].path}});
      return false;
    }
  }
}
