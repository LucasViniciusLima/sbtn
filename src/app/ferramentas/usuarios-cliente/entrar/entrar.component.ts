import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/ferramentas/guards/auth.service';
import { ClientService } from '../clients.service';

@Component({
  selector: 'usuario-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  mainUserId: string = '';
  user: any;
  urlDestiny: string;
  clients: any;
  selectedClientId: any;


  constructor(private clientStore: ClientService, private router: Router, private auth: AuthService) {    
    this.mainUserId = router.getCurrentNavigation().extras.state?.email;
    this.urlDestiny = router.getCurrentNavigation().extras.state?.destino;
  }

  ngOnInit(): void {
    this.clientStore.getUsers(this.mainUserId).then((clientesDoc) => {
      this.user = clientesDoc as any;
      this.clients = clientesDoc.clients;
    });
  }

  confirmar(select: number) {
    this.selectedClientId = this.clients[select]?.email;
    this.auth.fazerLogin(this.mainUserId, '123', this.urlDestiny);
  }
}
