import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../clients.service';

@Component({
  selector: 'app-ver-todos',
  templateUrl: './ver-todos.component.html',
  styleUrls: ['./ver-todos.component.css']
})
export class VerTodosComponent implements OnInit {

  user: any;
  clients: any;

  constructor(private clientStore: ClientService) { }

  ngOnInit(): void {
    this.clientStore.getUsers('lucaslimavzt@gmail.com').then((clientesDoc) => {
      this.user = clientesDoc as any;
      this.clients = clientesDoc.clients;
    });
  }


  editar() {
    console.log('editar');
  }

  excluir() {
    console.log('excluir');
  }

}
