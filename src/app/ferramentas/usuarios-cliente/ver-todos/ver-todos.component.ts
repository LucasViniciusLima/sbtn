import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../clients.service';

@Component({
  selector: 'app-ver-todos',
  templateUrl: './ver-todos.component.html',
  styleUrls: ['./ver-todos.component.css']
})
export class VerTodosComponent implements OnInit {

  user: any;
  clients: any;
  userId: string;

  constructor(private clientStore: ClientService, private route: Router) {
    this.userId = this.route.getCurrentNavigation()?.extras.state?.email;
  }

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
