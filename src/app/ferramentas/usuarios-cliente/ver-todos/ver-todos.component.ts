import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ver-todos',
  templateUrl: './ver-todos.component.html',
  styleUrls: ['./ver-todos.component.css']
})
export class VerTodosComponent implements OnInit {

  usuarios: string[] = ["nome 1","nome 2", "nome 3", "nome 4"];
  item: string = 'um novo item';
  
  constructor() {  }

  ngOnInit(): void {
  }

  editar(){

  }

  excluir(){

  }

}
