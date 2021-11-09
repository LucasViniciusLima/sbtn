import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../../../store.service';

@Component({
  selector: 'app-ver-todos',
  templateUrl: './ver-todos.component.html',
  styleUrls: ['./ver-todos.component.css']
})
export class VerTodosComponent implements OnInit {

  user: any;
  
  constructor(private store: StoreService) {  }

  ngOnInit(): void {
    this.store.getUserData('lucaslimavzt@gmail.com', 'users').then((clientesDoc) => {
      this.user = clientesDoc as any;
    });    
  }

  editar(){
    console.log('editar');
  }

  excluir(){
    console.log('excluir');
  }

}
