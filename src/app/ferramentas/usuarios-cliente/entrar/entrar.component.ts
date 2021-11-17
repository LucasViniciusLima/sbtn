import { Component, OnInit } from '@angular/core';
import { ClientService } from '../clients.service';

@Component({
  selector: 'usuario-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  user: any;
  clients: any;

  constructor(private clientStore: ClientService) { 

  }

  ngOnInit(): void {
    this.clientStore.getUsers('lucaslimavzt@gmail.com').then((clientesDoc) => {
      this.user = clientesDoc as any;
      this.clients = clientesDoc.clients;
    });

    
  }

}
