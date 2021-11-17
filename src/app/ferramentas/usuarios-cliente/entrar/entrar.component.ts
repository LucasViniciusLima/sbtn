import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../clients.service';

@Component({
  selector: 'usuario-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  user: any;//getId here
  urlDestiny: string = 'businessmodel';
  clients: any;
  selectedClientId: any;


  constructor(private clientStore: ClientService, private router: Router) {    
    if(this.router.getCurrentNavigation().extras.state?.url != null) this.urlDestiny = this.router.getCurrentNavigation().extras.state?.url;
    if(this.router.getCurrentNavigation().extras.state?.user != null) this.user = this.router.getCurrentNavigation().extras.state?.user;
  }

  ngOnInit(): void {
    this.clientStore.getUsers('lucaslimavzt@gmail.com').then((clientesDoc) => {
      this.user = clientesDoc as any;
      this.clients = clientesDoc.clients;
    });
  }

  confirmar(select: number) {
    this.selectedClientId = this.clients[select]?.email;
    this.router.navigateByUrl('/'+this.urlDestiny, {
      state: {
        clientId: this.selectedClientId
      }
    });
  }
}
